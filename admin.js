/**
 * YOVA COLLECTIONS - ADMIN PORTAL CONTROLLER
 * Handles Firebase Authentication, Cloud Firestore product management,
 * Firebase Storage image uploads, and live inventory synchronization.
 */

import {
  auth,
  db,
  storage,
  isFirebaseConfigured,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  ref,
  uploadBytes,
  getDownloadURL
} from "./firebase-config.js";

// Local state
let currentProducts = [];
let selectedImageFile = null;
let pendingDeleteId = null;
let isSubmitting = false;

// DOM Elements
const authView = document.getElementById("authView");
const dashboardView = document.getElementById("dashboardView");
const navAuthControls = document.getElementById("navAuthControls");
const userEmailDisplay = document.getElementById("userEmailDisplay");
const logoutBtn = document.getElementById("logoutBtn");
const firebaseSetupBanner = document.getElementById("firebaseSetupBanner");

// Login Elements
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");

// Product Form Elements
const productForm = document.getElementById("productForm");
const formTitle = document.getElementById("formTitle");
const editProductId = document.getElementById("editProductId");
const prodName = document.getElementById("prodName");
const prodCategory = document.getElementById("prodCategory");
const prodType = document.getElementById("prodType");
const prodPrice = document.getElementById("prodPrice");
const prodOrigPrice = document.getElementById("prodOrigPrice");
const prodDesc = document.getElementById("prodDesc");
const prodImageFile = document.getElementById("prodImageFile");
const prodImageUrl = document.getElementById("prodImageUrl");
const uploadDropzone = document.getElementById("uploadDropzone");
const imagePreviewBox = document.getElementById("imagePreviewBox");
const imagePreviewImg = document.getElementById("imagePreviewImg");
const removeImgBtn = document.getElementById("removeImgBtn");
const prodInStock = document.getElementById("prodInStock");
const prodIsFeatured = document.getElementById("prodIsFeatured");
const saveProductBtn = document.getElementById("saveProductBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

// Stats & Catalog Elements
const statTotalCount = document.getElementById("statTotalCount");
const statInStockCount = document.getElementById("statInStockCount");
const statFeaturedCount = document.getElementById("statFeaturedCount");
const statOutOfStockCount = document.getElementById("statOutOfStockCount");
const catalogSearchInput = document.getElementById("catalogSearchInput");
const productsTableBody = document.getElementById("productsTableBody");

// Delete Modal Elements
const deleteConfirmModal = document.getElementById("deleteConfirmModal");
const deleteConfirmText = document.getElementById("deleteConfirmText");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

// Alert Box
const alertBox = document.getElementById("alertBox");
const alertMessage = document.getElementById("alertMessage");
let alertTimer = null;

function showAlert(message, type = "success") {
  if (alertTimer) clearTimeout(alertTimer);
  alertBox.className = `alert-box ${type}`;
  alertMessage.textContent = message;
  alertBox.style.display = "flex";
  alertTimer = setTimeout(() => {
    alertBox.style.display = "none";
  }, 4500);
}

// ==========================================
// 1. AUTHENTICATION LIFECYCLE
// ==========================================
function initAuth() {
  if (!isFirebaseConfigured()) {
    if (firebaseSetupBanner) firebaseSetupBanner.style.display = "flex";
    console.warn("Firebase credentials not configured in firebase-config.js.");
  }

  if (!auth) {
    // Graceful fallback for UI preview before user pastes Firebase credentials
    setupDemoFallbackAuth();
    return;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      authView.style.display = "none";
      dashboardView.style.display = "block";
      navAuthControls.style.display = "flex";
      userEmailDisplay.textContent = user.email || "Admin";
      bindRealtimeProducts();
    } else {
      // User is signed out
      authView.style.display = "flex";
      dashboardView.style.display = "none";
      navAuthControls.style.display = "none";
    }
  });
}

// Sign-in handler
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  if (!email || !password) {
    showAlert("Please enter your email and password.", "error");
    return;
  }

  loginSubmitBtn.disabled = true;
  loginSubmitBtn.textContent = "Verifying...";

  try {
    if (!isFirebaseConfigured() || !auth) {
      // In demo mode prior to pasting real keys
      sessionStorage.setItem("yova_demo_admin_logged_in", "true");
      sessionStorage.setItem("yova_demo_admin_email", email);
      showAlert("Preview mode: Sign-in successful. Remember to paste your Firebase credentials into firebase-config.js!", "success");
      setupDemoFallbackAuth();
      return;
    }

    await signInWithEmailAndPassword(auth, email, password);
    showAlert("Welcome back to YOVA Collections Admin Portal!", "success");
    loginForm.reset();
  } catch (error) {
    console.error("Sign-in error:", error);
    let msg = "Failed to sign in. Please verify your credentials.";
    if (error.code === "auth/user-not-found" || error.code === "auth/invalid-credential") {
      msg = "Invalid email or password. Please check your admin credentials.";
    } else if (error.code === "auth/wrong-password") {
      msg = "Incorrect password.";
    } else if (error.code === "auth/too-many-requests") {
      msg = "Too many failed attempts. Please try again later.";
    }
    showAlert(msg, "error");
  } finally {
    loginSubmitBtn.disabled = false;
    loginSubmitBtn.innerHTML = "Sign In to Dashboard &rarr;";
  }
});

// Logout handler
logoutBtn.addEventListener("click", async () => {
  try {
    if (auth && isFirebaseConfigured()) {
      await signOut(auth);
    } else {
      sessionStorage.removeItem("yova_demo_admin_logged_in");
      sessionStorage.removeItem("yova_demo_admin_email");
      setupDemoFallbackAuth();
    }
    showAlert("You have been signed out successfully.", "success");
  } catch (err) {
    console.error("Logout error:", err);
  }
});

// Demo fallback when Firebase project is not yet created
function setupDemoFallbackAuth() {
  const isDemoLoggedIn = sessionStorage.getItem("yova_demo_admin_logged_in") === "true";
  if (isDemoLoggedIn) {
    authView.style.display = "none";
    dashboardView.style.display = "block";
    navAuthControls.style.display = "flex";
    userEmailDisplay.textContent = sessionStorage.getItem("yova_demo_admin_email") || "admin@yovacollections.com";
    loadLocalFallbackProducts();
  } else {
    authView.style.display = "flex";
    dashboardView.style.display = "none";
    navAuthControls.style.display = "none";
  }
}

// ==========================================
// 2. IMAGE PREVIEW & UPLOAD HANDLING
// ==========================================
uploadDropzone.addEventListener("click", () => {
  prodImageFile.click();
});

prodImageFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showAlert("Please select a valid image file (PNG, JPG, WEBP).", "error");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showAlert("Image must be smaller than 10MB.", "error");
    return;
  }

  selectedImageFile = file;

  const reader = new FileReader();
  reader.onload = (evt) => {
    imagePreviewImg.src = evt.target.result;
    imagePreviewBox.style.display = "block";
    prodImageUrl.value = ""; // Clear manual URL if file selected
  };
  reader.readAsDataURL(file);
});

// Support typing or pasting a URL/path into prodImageUrl
prodImageUrl.addEventListener("input", (e) => {
  const url = e.target.value.trim();
  if (url) {
    imagePreviewImg.src = url;
    imagePreviewBox.style.display = "block";
    selectedImageFile = null;
    prodImageFile.value = "";
  } else if (!selectedImageFile) {
    imagePreviewBox.style.display = "none";
  }
});

removeImgBtn.addEventListener("click", () => {
  selectedImageFile = null;
  prodImageFile.value = "";
  prodImageUrl.value = "";
  imagePreviewImg.src = "";
  imagePreviewBox.style.display = "none";
});

// ==========================================
// 3. PRODUCT CRUD OPERATIONS
// ==========================================

// Real-time Firestore Listener
let unsubscribeFirestore = null;

function bindRealtimeProducts() {
  if (!db || !isFirebaseConfigured()) {
    loadLocalFallbackProducts();
    return;
  }

  try {
    const q = collection(db, "products");
    if (unsubscribeFirestore) unsubscribeFirestore();

    unsubscribeFirestore = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((docSnap) => {
        items.push({ id: docSnap.id, ...docSnap.data() });
      });

      // Sort by creation time if available
      items.sort((a, b) => {
        const timeA = a.createdAt?.toMillis?.() || 0;
        const timeB = b.createdAt?.toMillis?.() || 0;
        return timeB - timeA;
      });

      currentProducts = items;
      renderProductsTable(currentProducts);
      updateStats(currentProducts);
    }, (err) => {
      console.error("Firestore snapshot error:", err);
      showAlert("Notice: Could not sync with Firestore. Using offline local catalogue.", "error");
      loadLocalFallbackProducts();
    });
  } catch (err) {
    console.error("Failed to bind Firestore listener:", err);
    loadLocalFallbackProducts();
  }
}

// Fallback products from static data or localStorage
function loadLocalFallbackProducts() {
  const local = localStorage.getItem("yova_custom_products");
  if (local) {
    try {
      currentProducts = JSON.parse(local);
      renderProductsTable(currentProducts);
      updateStats(currentProducts);
      return;
    } catch (e) {
      console.warn("Could not parse local custom products:", e);
    }
  }

  // Pre-seed with existing curated items
  currentProducts = [
    {
      id: "p1",
      name: "Lakshmi Temple Rolled Gold Haram",
      category: "necklaces",
      type: "rolled-gold",
      price: 3499,
      originalPrice: 5499,
      image: "images/temple_haram_premium.jpg",
      description: "Royal South Indian Goddess Lakshmi temple haram necklace crafted with genuine rolled gold micro-plating, kemp rubies, emerald stones, and cascading pearl drops.",
      inStock: true,
      isFeatured: true
    },
    {
      id: "p2",
      name: "Handmade Peacock Antique Kadas (Pair)",
      category: "bangles",
      type: "handmade",
      price: 2199,
      originalPrice: 3799,
      image: "images/handmade_kadas.jpg",
      description: "Pair of artisanal handmade rolled gold bangles featuring intricately carved 3D peacock motifs, studded with ruby and emerald gemstones.",
      inStock: true,
      isFeatured: true
    },
    {
      id: "p3",
      name: "Emerald Polki Royal Choker Set",
      category: "necklaces",
      type: "handmade",
      price: 2899,
      originalPrice: 4599,
      image: "images/choker_necklace.jpg",
      description: "Magnificent handmade choker necklace embedded with glowing emerald green gemstone drops, ruby flower clusters, fine polki work, and micro pearl fringe.",
      inStock: true,
      isFeatured: true
    },
    {
      id: "p4",
      name: "Antique Heritage Kemp Jhumkas",
      category: "earrings",
      type: "handmade",
      price: 1499,
      originalPrice: 2499,
      image: "images/antique_jhumkas_premium.jpg",
      description: "Masterpiece handmade South Indian rolled gold jhumka earrings with ornate floral studs, kemp stone rings, and bell domes accented with tiny seed pearls.",
      inStock: true,
      isFeatured: true
    }
  ];

  renderProductsTable(currentProducts);
  updateStats(currentProducts);
}

// Add or Edit Product Submit
productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  const id = editProductId.value.trim();
  const name = prodName.value.trim();
  const category = prodCategory.value;
  const type = prodType.value;
  const price = parseFloat(prodPrice.value);
  const originalPrice = parseFloat(prodOrigPrice.value);
  const description = prodDesc.value.trim();
  const inStock = prodInStock.checked;
  const isFeatured = prodIsFeatured.checked;

  if (!name || isNaN(price) || isNaN(originalPrice)) {
    showAlert("Please fill all required fields with valid pricing.", "error");
    return;
  }

  let imageUrl = prodImageUrl.value.trim();
  if (!imageUrl && !selectedImageFile && !imagePreviewImg.src) {
    showAlert("Please provide a product image (upload or file path).", "error");
    return;
  }

  isSubmitting = true;
  saveProductBtn.disabled = true;
  saveProductBtn.textContent = id ? "Updating Product..." : "Uploading & Saving...";

  try {
    // 1. Handle image upload to Firebase Storage if a file was chosen
    if (selectedImageFile && storage && isFirebaseConfigured()) {
      const sanitizedName = selectedImageFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const storagePath = `products/${Date.now()}_${sanitizedName}`;
      const storageReference = ref(storage, storagePath);
      const uploadResult = await uploadBytes(storageReference, selectedImageFile);
      imageUrl = await getDownloadURL(uploadResult.ref);
    } else if (imagePreviewImg.src) {
      imageUrl = imageUrl || imagePreviewImg.src;
    }

    const productPayload = {
      name,
      category,
      type,
      price,
      originalPrice,
      description,
      image: imageUrl,
      inStock,
      isFeatured,
      updatedAt: serverTimestamp ? serverTimestamp() : new Date().toISOString()
    };

    if (db && isFirebaseConfigured()) {
      if (id) {
        // Edit existing product
        await updateDoc(doc(db, "products", id), productPayload);
        showAlert(`Product "${name}" updated successfully!`, "success");
      } else {
        // Add new product
        productPayload.createdAt = serverTimestamp();
        await addDoc(collection(db, "products"), productPayload);
        showAlert(`Product "${name}" added to catalogue!`, "success");
      }
    } else {
      // Local fallback mode
      if (id) {
        const idx = currentProducts.findIndex(p => p.id === id);
        if (idx !== -1) currentProducts[idx] = { ...currentProducts[idx], ...productPayload };
      } else {
        const newId = "local_" + Date.now();
        currentProducts.unshift({ id: newId, ...productPayload });
      }
      localStorage.setItem("yova_custom_products", JSON.stringify(currentProducts));
      renderProductsTable(currentProducts);
      updateStats(currentProducts);
      showAlert(`Saved "${name}" locally. Add your Firebase keys to sync to Cloud Firestore!`, "success");
    }

    resetProductForm();
  } catch (err) {
    console.error("Error saving product:", err);
    showAlert("Failed to save product: " + (err.message || err), "error");
  } finally {
    isSubmitting = false;
    saveProductBtn.disabled = false;
    saveProductBtn.innerHTML = id ? "Update Product &rarr;" : "Save Product to Catalogue &rarr;";
  }
});

// Edit button clicked
window.editProduct = function(id) {
  const p = currentProducts.find(item => item.id === id);
  if (!p) return;

  editProductId.value = p.id;
  prodName.value = typeof p.name === "string" ? p.name : (p.name.en || "");
  prodCategory.value = p.category || "necklaces";
  prodType.value = p.type || "rolled-gold";
  prodPrice.value = p.price || "";
  prodOrigPrice.value = p.originalPrice || "";
  prodDesc.value = typeof p.description === "string" ? p.description : (p.description?.en || "");
  prodImageUrl.value = p.image || "";
  prodInStock.checked = p.inStock !== false;
  prodIsFeatured.checked = Boolean(p.isFeatured);

  if (p.image) {
    imagePreviewImg.src = p.image;
    imagePreviewBox.style.display = "block";
  }

  formTitle.innerHTML = "<span>✏️</span><span>Edit Product</span>";
  saveProductBtn.innerHTML = "Update Product &rarr;";
  cancelEditBtn.style.display = "inline-block";

  // Scroll to form smoothly
  productForm.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Cancel edit
cancelEditBtn.addEventListener("click", () => {
  resetProductForm();
});

function resetProductForm() {
  productForm.reset();
  editProductId.value = "";
  selectedImageFile = null;
  prodImageFile.value = "";
  prodImageUrl.value = "";
  imagePreviewImg.src = "";
  imagePreviewBox.style.display = "none";
  prodInStock.checked = true;
  prodIsFeatured.checked = false;

  formTitle.innerHTML = "<span>✨</span><span>Add New Product</span>";
  saveProductBtn.innerHTML = "Save Product to Catalogue &rarr;";
  cancelEditBtn.style.display = "none";
}

// Delete confirmation workflow
window.askDeleteProduct = function(id, name) {
  pendingDeleteId = id;
  deleteConfirmText.textContent = `Are you sure you want to permanently delete "${name}" from YOVA Collections?`;
  deleteConfirmModal.classList.add("open");
};

cancelDeleteBtn.addEventListener("click", () => {
  pendingDeleteId = null;
  deleteConfirmModal.classList.remove("open");
});

confirmDeleteBtn.addEventListener("click", async () => {
  if (!pendingDeleteId) return;

  confirmDeleteBtn.disabled = true;
  confirmDeleteBtn.textContent = "Deleting...";

  try {
    if (db && isFirebaseConfigured()) {
      await deleteDoc(doc(db, "products", pendingDeleteId));
      showAlert("Product deleted from Firestore successfully.", "success");
    } else {
      currentProducts = currentProducts.filter(p => p.id !== pendingDeleteId);
      localStorage.setItem("yova_custom_products", JSON.stringify(currentProducts));
      renderProductsTable(currentProducts);
      updateStats(currentProducts);
      showAlert("Product removed from catalogue.", "success");
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    showAlert("Failed to delete product: " + (err.message || err), "error");
  } finally {
    confirmDeleteBtn.disabled = false;
    confirmDeleteBtn.textContent = "Yes, Delete";
    pendingDeleteId = null;
    deleteConfirmModal.classList.remove("open");
  }
});

// ==========================================
// 4. RENDERING & UI HELPERS
// ==========================================
function renderProductsTable(products) {
  const q = catalogSearchInput.value.toLowerCase().trim();
  let filtered = products;

  if (q) {
    filtered = products.filter(p => {
      const name = (typeof p.name === "string" ? p.name : (p.name?.en || "")).toLowerCase();
      const cat = (p.category || "").toLowerCase();
      return name.includes(q) || cat.includes(q);
    });
  }

  if (filtered.length === 0) {
    productsTableBody.innerHTML = `
      <tr>
        <td colspan="5">
          <div class="empty-state">
            <div class="empty-state-icon">💎</div>
            <p>No products found in catalogue.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  productsTableBody.innerHTML = filtered.map((p) => {
    const name = typeof p.name === "string" ? p.name : (p.name?.en || "Unnamed Piece");
    const escapedName = name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const cat = p.category || "Jewellery";
    const inStock = p.inStock !== false;
    const isFeatured = Boolean(p.isFeatured);
    const imgUrl = p.image || "images/hero_jewellery.jpg";

    return `
      <tr>
        <td>
          <img src="${imgUrl}" alt="${escapedName}" class="prod-thumb" onerror="this.src='images/hero_jewellery.jpg'">
        </td>
        <td>
          <div class="prod-name">${name}</div>
          <div class="prod-cat">${cat} &bull; ${p.type === 'handmade' ? 'Handmade' : 'Rolled Gold'}</div>
        </td>
        <td>
          <strong style="color: var(--burgundy);">₹${(p.price || 0).toLocaleString('en-IN')}</strong>
          <span style="font-size: 12px; color: var(--text-muted); text-decoration: line-through; margin-left: 6px;">
            ₹${(p.originalPrice || 0).toLocaleString('en-IN')}
          </span>
        </td>
        <td>
          <span class="badge ${inStock ? 'badge-in-stock' : 'badge-out-stock'}">
            ${inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          ${isFeatured ? '<span class="badge badge-featured" style="margin-left: 4px;">⭐ Featured</span>' : ''}
        </td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button class="btn-action edit" onclick="editProduct('${p.id}')" title="Edit product details">
              ✏️ Edit
            </button>
            <button class="btn-action delete" onclick="askDeleteProduct('${p.id}', '${escapedName}')" title="Delete product">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function updateStats(products) {
  const total = products.length;
  const inStock = products.filter(p => p.inStock !== false).length;
  const outOfStock = total - inStock;
  const featured = products.filter(p => Boolean(p.isFeatured)).length;

  if (statTotalCount) statTotalCount.textContent = total;
  if (statInStockCount) statInStockCount.textContent = inStock;
  if (statFeaturedCount) statFeaturedCount.textContent = featured;
  if (statOutOfStockCount) statOutOfStockCount.textContent = outOfStock;
}

// Search filter listener
catalogSearchInput.addEventListener("input", () => {
  renderProductsTable(currentProducts);
});

// Initialize on page load
initAuth();
