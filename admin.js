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
  getDocs,
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
let currentOrders = [];
let currentReviews = [];
let selectedImageFile = null;
let pendingDeleteId = null;
let isSubmitting = false;
let activeAdminTab = "orders";
let selectedOrderForModal = null;

// DOM Elements
const authView = document.getElementById("authView");
const dashboardView = document.getElementById("dashboardView");
const navAuthControls = document.getElementById("navAuthControls");
const userEmailDisplay = document.getElementById("userEmailDisplay");
const logoutBtn = document.getElementById("logoutBtn");
const ADMIN_EMAIL = "sk.akbarsaheb2006@gmail.com";
const firebaseSetupBanner = document.getElementById("firebaseSetupBanner");

// Tabs Elements
const tabOrdersBtn = document.getElementById("tabOrdersBtn");
const tabProductsBtn = document.getElementById("tabProductsBtn");
const tabReviewsBtn = document.getElementById("tabReviewsBtn");
const tabOrdersBadge = document.getElementById("tabOrdersBadge");
const tabProductsBadge = document.getElementById("tabProductsBadge");
const tabReviewsBadge = document.getElementById("tabReviewsBadge");
const tabOrdersView = document.getElementById("tabOrdersView");
const tabProductsView = document.getElementById("tabProductsView");
const tabReviewsView = document.getElementById("tabReviewsView");
const reviewsTableBody = document.getElementById("reviewsTableBody");
const refreshReviewsBtn = document.getElementById("refreshReviewsBtn");

// Orders Management Elements
const statOrdersTotal = document.getElementById("statOrdersTotal");
const statOrdersPending = document.getElementById("statOrdersPending");
const statOrdersShipped = document.getElementById("statOrdersShipped");
const statOrdersRevenue = document.getElementById("statOrdersRevenue");
const ordersSearchInput = document.getElementById("ordersSearchInput");
const ordersStatusFilter = document.getElementById("ordersStatusFilter");
const refreshOrdersBtn = document.getElementById("refreshOrdersBtn");
const ordersTableBody = document.getElementById("ordersTableBody");

// Order Modal Elements
const orderDetailsModal = document.getElementById("orderDetailsModal");
const modalOrderTitle = document.getElementById("modalOrderTitle");
const modalOrderDate = document.getElementById("modalOrderDate");
const modalCustomerInfo = document.getElementById("modalCustomerInfo");
const modalPaymentInfo = document.getElementById("modalPaymentInfo");
const modalStatusSelect = document.getElementById("modalStatusSelect");
const modalOrderItemsList = document.getElementById("modalOrderItemsList");
const modalOrderTotal = document.getElementById("modalOrderTotal");
const modalWhatsAppCustomerBtn = document.getElementById("modalWhatsAppCustomerBtn");
const closeOrderModalBtn = document.getElementById("closeOrderModalBtn");
const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");

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
  if (!isFirebaseConfigured() || !auth) {
    if (firebaseSetupBanner) firebaseSetupBanner.style.display = "flex";
    authView.style.display = "flex";
    dashboardView.style.display = "none";
    navAuthControls.style.display = "none";
    console.warn("Firebase must be configured before the admin portal can be used.");
    return;
  }

  onAuthStateChanged(auth, async (user) => {
    if (user && (user.email || "").toLowerCase() === ADMIN_EMAIL) {
      authView.style.display = "none";
      dashboardView.style.display = "block";
      navAuthControls.style.display = "flex";
      userEmailDisplay.textContent = user.email;
      bindRealtimeProducts();
      fetchOrders();
      switchAdminTab("orders");
    } else {
      if (user) {
        await signOut(auth);
        showAlert(`Admin access is limited to ${ADMIN_EMAIL}.`, "error");
      }
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
      showAlert("Firebase setup is required before admin sign-in.", "error");
      return;
    }
    if (email.toLowerCase() !== ADMIN_EMAIL) {
      showAlert(`Only ${ADMIN_EMAIL} can access this admin portal.`, "error");
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
    if (auth && isFirebaseConfigured()) await signOut(auth);
    showAlert("You have been signed out successfully.", "success");
  } catch (err) {
    console.error("Logout error:", err);
  }
});
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

// ==========================================
// 5. ORDERS MANAGEMENT & DIRECT CHECKOUT FLOW
// ==========================================

function switchAdminTab(tab) {
  activeAdminTab = tab;
  const views = { orders: tabOrdersView, products: tabProductsView, reviews: tabReviewsView };
  const buttons = { orders: tabOrdersBtn, products: tabProductsBtn, reviews: tabReviewsBtn };
  Object.entries(views).forEach(([name, view]) => {
    if (view) view.style.display = name === tab ? "block" : "none";
    if (buttons[name]) buttons[name].classList.toggle("active", name === tab);
  });
  if (tab === "orders") fetchOrders();
  if (tab === "reviews") fetchReviews();
  if (tab === "products" && currentProducts.length > 0) {
    renderProductsTable(currentProducts);
    updateStats(currentProducts);
  }
}
window.switchAdminTab = switchAdminTab;

async function fetchOrders() {
  if (ordersTableBody) {
    ordersTableBody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><div class="empty-state-icon">⏳</div><p>Loading customer orders...</p></div></td></tr>`;
  }

  try {
    if (!db || !isFirebaseConfigured()) {
      throw new Error("Firebase Firestore is not configured.");
    }
    const snapshot = await getDocs(collection(db, "orders"));
    currentOrders = snapshot.docs.map((orderDoc) => ({ id: orderDoc.id, ...orderDoc.data() }));
    currentOrders.sort((a, b) => {
      const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || a.date || 0);
      const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || b.date || 0);
      return dateB - dateA;
    });
    renderOrdersTable();
    updateOrdersStats();
  } catch (err) {
    console.error("Could not fetch Firestore orders:", err);
    currentOrders = [];
    renderOrdersTable();
    updateOrdersStats();
    showAlert("Could not load Firestore orders. Check that the published rules allow admin access.", "error");
  }
}
window.fetchOrders = fetchOrders;
async function fetchReviews() {
  if (!reviewsTableBody) return;
  reviewsTableBody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><p>Loading customer reviews...</p></div></td></tr>`;
  try {
    if (!db || !isFirebaseConfigured()) throw new Error("Firebase is not configured.");
    const snapshot = await getDocs(collection(db, "reviews"));
    currentReviews = snapshot.docs.map((reviewDoc) => ({ id: reviewDoc.id, ...reviewDoc.data() }));
    currentReviews.sort((a, b) => {
      const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
      const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
      return dateB - dateA;
    });
    renderReviewsTable();
    if (tabReviewsBadge) tabReviewsBadge.textContent = currentReviews.length;
  } catch (error) {
    console.error("Could not fetch Firestore reviews:", error);
    currentReviews = [];
    renderReviewsTable();
    showAlert("Could not load reviews. Check that Firestore rules allow admin access.", "error");
  }
}

function escapeReviewText(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderReviewsTable() {
  if (!reviewsTableBody) return;
  if (!currentReviews.length) {
    reviewsTableBody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><p>No customer reviews found.</p></div></td></tr>`;
    return;
  }
  reviewsTableBody.innerHTML = currentReviews.map((review) => {
    const date = review.createdAt?.toDate ? review.createdAt.toDate() : new Date(review.createdAt || 0);
    const dateText = Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString("en-IN");
    const stars = "★".repeat(Math.max(0, Math.min(5, Number(review.rating) || 0)));
    return `<tr><td>${escapeReviewText(dateText)}</td><td>${escapeReviewText(review.customerName)}</td><td>${escapeReviewText(review.productName)}</td><td style="color:var(--gold-dark);">${stars}</td><td style="white-space:normal;min-width:220px;">${escapeReviewText(review.reviewText)}</td></tr>`;
  }).join("");
}

function updateOrdersStats() {
  const total = currentOrders.length;
  const pending = currentOrders.filter(o => (o.orderStatus || o.status || "Pending").toLowerCase() === "pending").length;
  const shipped = currentOrders.filter(o => ["confirmed", "shipped"].includes((o.orderStatus || o.status || "").toLowerCase())).length;
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const thisMonthOrders = currentOrders.filter((order) => {
    const date = order.createdAt?.toDate ? order.createdAt.toDate() : new Date(order.createdAt || order.date || 0);
    const status = (order.orderStatus || order.status || "").toLowerCase();
    return !Number.isNaN(date.getTime()) && date >= monthStart && date < nextMonth && status !== "cancelled";
  });
  const monthSales = thisMonthOrders.reduce((sum, order) => sum + (Number(order.total) || 0), 0);

  if (statOrdersTotal) statOrdersTotal.textContent = total;
  if (statOrdersPending) statOrdersPending.textContent = pending;
  if (statOrdersShipped) statOrdersShipped.textContent = shipped;
  if (statOrdersRevenue) statOrdersRevenue.textContent = "₹" + monthSales.toLocaleString("en-IN");
  if (tabOrdersBadge) tabOrdersBadge.textContent = pending;
  if (tabProductsBadge) tabProductsBadge.textContent = currentProducts.length;
}
function renderOrdersTable() {
  if (!ordersTableBody) return;

  const q = (ordersSearchInput?.value || "").toLowerCase().trim();
  const statusFilter = ordersStatusFilter?.value || "all";

  let filtered = currentOrders;

  // Filter by status dropdown
  if (statusFilter !== "all") {
    filtered = filtered.filter(o => {
      const currentStat = (o.orderStatus || o.status || "Pending").toLowerCase();
      return currentStat === statusFilter.toLowerCase();
    });
  }

  // Filter by search query (customer name, phone, order ID, city, products)
  if (q) {
    filtered = filtered.filter(o => {
      const idMatch = (o.id || "").toLowerCase().includes(q);
      const cust = o.customer || {};
      const nameMatch = (cust.name || "").toLowerCase().includes(q);
      const phoneMatch = (cust.phone || "").toLowerCase().includes(q);
      const cityMatch = (cust.city || "").toLowerCase().includes(q);
      const itemsMatch = (o.items || []).some(it => (it.name || "").toLowerCase().includes(q));
      return idMatch || nameMatch || phoneMatch || cityMatch || itemsMatch;
    });
  }

  if (filtered.length === 0) {
    ordersTableBody.innerHTML = `
      <tr>
        <td colspan="6">
          <div class="empty-state">
            <div class="empty-state-icon">🛍️</div>
            <p>No customer orders found matching your filter.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  ordersTableBody.innerHTML = filtered.map(order => {
    const cust = order.customer || {};
    const items = order.items || [];
    const status = order.orderStatus || order.status || "Pending";
    const statusClass = status.toLowerCase();
    const cleanPhone = (cust.phone || "").replace(/\D/g, "");

    // Structured items preview
    const itemsPreviewHTML = items.map(it => `
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
        <img src="${it.image || 'images/hero_jewellery.jpg'}" alt="${it.name || ''}" style="width:34px; height:34px; object-fit:cover; border-radius:4px; border:1px solid #C69A36;">
        <div style="font-size:12px; line-height:1.2;">
          <strong>${it.name || 'Jewellery Piece'}</strong>
          <span style="color:#6B635B;"> × ${it.qty || 1} (₹${(it.price || 0).toLocaleString('en-IN')})</span>
        </div>
      </div>
    `).join("");

    // WhatsApp Message URL for customer updates
    const waUpdateMsg = `Hi ${cust.name || 'Valued Customer'}, regarding your YOVA Collections Order #${order.id} for ₹${(order.total || 0).toLocaleString('en-IN')}. Current status: *${status}*. Thank you for shopping with us!`;
    const waCustomerUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(waUpdateMsg)}`;

    return `
      <tr>
        <td>
          <div style="font-weight:700; color:var(--burgundy); font-size:14px;">#${order.id}</div>
          <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">${order.date || new Date(order.createdAt || Date.now()).toLocaleDateString('en-IN')}</div>
          <span style="display:inline-block; font-size:10px; background:#FAF5EB; color:#8F6918; padding:2px 6px; border-radius:4px; border:1px solid rgba(198,154,54,0.3); margin-top:4px;">Website Direct</span>
        </td>
        <td>
          <div style="font-weight:700; color:var(--text-dark);">${cust.name || 'Anonymous Customer'}</div>
          <div style="font-size:12px; color:var(--text-muted); margin:2px 0;">
            📱 <strong>${cust.phone || '-'}</strong> ${cust.email ? `&bull; ✉️ ${cust.email}` : ''}
          </div>
          <div style="font-size:11px; color:var(--text-muted); line-height:1.3; max-width:240px;">
            ${cust.address || ''}${cust.city ? ', ' + cust.city : ''}${cust.state ? ', ' + cust.state : ''}${cust.pincode ? ' - ' + cust.pincode : ''}
          </div>
        </td>
        <td>
          <div style="max-height:110px; overflow-y:auto;">
            ${itemsPreviewHTML || '<span style="color:var(--text-muted); font-size:12px;">No item details</span>'}
          </div>
        </td>
        <td>
          <strong style="color:var(--burgundy); font-size:15px;">₹${(order.total || 0).toLocaleString('en-IN')}</strong>
          <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">
            ${(order.paymentMethod || 'UPI').toUpperCase()} &bull; <span style="color:#1E7E34; font-weight:600;">${order.paymentStatus || 'Confirmed'}</span>
          </div>
        </td>
        <td>
          <select class="status-select ${statusClass}" onchange="updateOrderStatus('${order.id}', this.value)" title="Change order status">
            <option value="Pending" ${status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="Confirmed" ${status === "Confirmed" ? "selected" : ""}>Confirmed</option>
            <option value="Shipped" ${status === "Shipped" ? "selected" : ""}>Shipped</option>
            <option value="Delivered" ${status === "Delivered" ? "selected" : ""}>Delivered</option>
            <option value="Cancelled" ${status === "Cancelled" ? "selected" : ""}>Cancelled</option>
          </select>
        </td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button class="btn-action view" onclick="openOrderDetails('${order.id}')" title="View complete order receipt">
              👁️ View
            </button>
            <a class="btn-action wa" href="${waCustomerUrl}" target="_blank" rel="noopener" title="Message customer on WhatsApp">
              💬 Chat
            </a>
            <button class="btn-action delete" onclick="deleteOrder('${order.id}')" title="Delete order from records">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

async function updateOrderStatus(orderId, newStatus) {
  const order = currentOrders.find(o => o.id === orderId);
  if (!order) return;

  order.orderStatus = newStatus;
  order.status = newStatus;

  // 1. Update on server
  try {
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: orderId, orderStatus: newStatus, status: newStatus })
    });
  } catch (err) {
    console.warn("Failed to patch /api/orders:", err);
  }

  // 2. Update in localStorage
  try {
    const localOrders = JSON.parse(localStorage.getItem("yova_store_orders") || "[]");
    const idx = localOrders.findIndex(o => o.id === orderId);
    if (idx !== -1) {
      localOrders[idx].orderStatus = newStatus;
      localOrders[idx].status = newStatus;
      localStorage.setItem("yova_store_orders", JSON.stringify(localOrders));
    }
  } catch (err) {
    console.warn("LocalStorage update error:", err);
  }

  // 3. Update in Firestore if configured
  try {
    if (db && isFirebaseConfigured()) {
      await updateDoc(doc(db, "orders", orderId), { orderStatus: newStatus, status: newStatus });
    }
  } catch (e) {}

  showAlert(`Order #${orderId} marked as ${newStatus}.`, "success");
  renderOrdersTable();
  updateOrdersStats();
}
window.updateOrderStatus = updateOrderStatus;

async function deleteOrder(orderId) {
  if (!confirm(`Are you sure you want to permanently delete Order #${orderId} from records?`)) {
    return;
  }

  // 1. Delete on server
  try {
    await fetch(`/api/orders/${orderId}`, { method: "DELETE" });
  } catch (err) {
    console.warn("Server delete error:", err);
  }

  // 2. Delete from localStorage
  try {
    const localOrders = JSON.parse(localStorage.getItem("yova_store_orders") || "[]");
    const updated = localOrders.filter(o => o.id !== orderId);
    localStorage.setItem("yova_store_orders", JSON.stringify(updated));
  } catch (e) {}

  // 3. Delete from Firestore if configured
  try {
    if (db && isFirebaseConfigured()) {
      await deleteDoc(doc(db, "orders", orderId));
    }
  } catch (e) {}

  currentOrders = currentOrders.filter(o => o.id !== orderId);
  showAlert(`Order #${orderId} deleted from database.`, "success");
  renderOrdersTable();
  updateOrdersStats();
}
window.deleteOrder = deleteOrder;

function openOrderDetails(orderId) {
  const order = currentOrders.find(o => o.id === orderId);
  if (!order || !orderDetailsModal) return;

  selectedOrderForModal = order;
  const cust = order.customer || {};
  const items = order.items || [];
  const status = order.orderStatus || order.status || "Pending";
  const cleanPhone = (cust.phone || "").replace(/\D/g, "");

  if (modalOrderTitle) modalOrderTitle.textContent = `Order #${order.id}`;
  if (modalOrderDate) modalOrderDate.textContent = `Date: ${order.date || new Date(order.createdAt || Date.now()).toLocaleDateString("en-IN")}`;

  if (modalCustomerInfo) {
    modalCustomerInfo.innerHTML = `
      <div style="font-weight:700; color:var(--text-dark); font-size:14px; margin-bottom:4px;">${cust.name || 'Anonymous Customer'}</div>
      <div>📱 <strong>${cust.phone || '-'}</strong></div>
      ${cust.email ? `<div>✉️ ${cust.email}</div>` : ''}
      <div style="margin-top:6px; color:#334155; line-height:1.4;">
        ${cust.address || ''}<br>
        ${cust.city || ''}, ${cust.state || ''} - <strong>${cust.pincode || ''}</strong>
      </div>
    `;
  }

  if (modalPaymentInfo) {
    modalPaymentInfo.innerHTML = `
      <div><strong>Payment Method:</strong> ${(order.paymentMethod || 'UPI').toUpperCase()}</div>
      <div><strong>Payment Status:</strong> <span style="color:#1E7E34; font-weight:700;">${order.paymentStatus || 'Confirmed'}</span></div>
      <div><strong>Total Amount:</strong> <strong style="color:var(--burgundy); font-size:15px;">₹${(order.total || 0).toLocaleString('en-IN')}</strong></div>
    `;
  }

  if (modalStatusSelect) {
    modalStatusSelect.value = status;
    modalStatusSelect.className = `status-select ${status.toLowerCase()}`;
  }

  if (modalOrderItemsList) {
    modalOrderItemsList.innerHTML = items.map(it => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px dashed rgba(198,154,54,0.3);">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${it.image || 'images/hero_jewellery.jpg'}" alt="${it.name || ''}" style="width:42px; height:42px; object-fit:cover; border-radius:6px; border:1px solid #C69A36;">
          <div>
            <div style="font-weight:600; color:var(--burgundy);">${it.name || 'Jewellery Piece'}</div>
            <div style="font-size:12px; color:var(--text-muted);">Qty: ${it.qty || 1} × ₹${(it.price || 0).toLocaleString('en-IN')}</div>
          </div>
        </div>
        <strong style="color:var(--burgundy);">₹${(it.total || (it.price * it.qty) || 0).toLocaleString('en-IN')}</strong>
      </div>
    `).join("");
  }

  if (modalOrderTotal) {
    modalOrderTotal.textContent = `₹${(order.total || 0).toLocaleString('en-IN')}`;
  }

  if (modalWhatsAppCustomerBtn) {
    const waMsg = `Hi ${cust.name || 'Valued Customer'}, updating you from YOVA Collections regarding your order #${order.id}. Current status: *${status}*. Delivery dispatch will follow shortly!`;
    modalWhatsAppCustomerBtn.href = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(waMsg)}`;
  }

  orderDetailsModal.classList.add("open");
}
window.openOrderDetails = openOrderDetails;

// Attach event listeners for tabs & orders controls
if (tabOrdersBtn) {
  tabOrdersBtn.addEventListener("click", () => switchAdminTab("orders"));
}
if (tabProductsBtn) {
  tabProductsBtn.addEventListener("click", () => switchAdminTab("products"));
}
if (tabReviewsBtn) {
  tabReviewsBtn.addEventListener("click", () => switchAdminTab("reviews"));
}

if (refreshReviewsBtn) {
  refreshReviewsBtn.addEventListener("click", () => fetchReviews());
}
if (ordersSearchInput) {
  ordersSearchInput.addEventListener("input", () => renderOrdersTable());
}
if (ordersStatusFilter) {
  ordersStatusFilter.addEventListener("change", () => renderOrdersTable());
}
if (refreshOrdersBtn) {
  refreshOrdersBtn.addEventListener("click", async () => {
    await fetchOrders();
    showAlert("Orders refreshed successfully.", "success");
  });
}

if (closeOrderModalBtn) {
  closeOrderModalBtn.addEventListener("click", () => orderDetailsModal?.classList.remove("open"));
}
if (modalCloseActionBtn) {
  modalCloseActionBtn.addEventListener("click", () => orderDetailsModal?.classList.remove("open"));
}
if (modalStatusSelect) {
  modalStatusSelect.addEventListener("change", (e) => {
    if (selectedOrderForModal) {
      updateOrderStatus(selectedOrderForModal.id, e.target.value);
      modalStatusSelect.className = `status-select ${e.target.value.toLowerCase()}`;
    }
  });
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === orderDetailsModal) {
    orderDetailsModal.classList.remove("open");
  }
});

// Initialize on page load
initAuth();

