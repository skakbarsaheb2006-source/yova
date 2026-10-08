import { db, isFirebaseConfigured, collection, addDoc, doc, setDoc, serverTimestamp } from "./firebase-config.js";

const firebaseReady = Boolean(db && isFirebaseConfigured());
window.yovaFirebaseReady = firebaseReady;

window.yovaSaveOrder = async (order) => {
  if (!firebaseReady) throw new Error("Firebase is not configured.");
  await setDoc(doc(db, "orders", order.id), { ...order, createdAt: serverTimestamp() });
};

window.yovaSubmitReview = async (review) => {
  if (!firebaseReady) throw new Error("Firebase is not configured.");
  await addDoc(collection(db, "reviews"), {
    customerName: review.customerName,
    productName: review.productName,
    rating: Number(review.rating),
    reviewText: review.reviewText,
    status: "pending",
    createdAt: serverTimestamp()
  });
};

const reviewForm = document.getElementById("customerReviewForm");
const reviewStatus = document.getElementById("reviewSubmitStatus");
if (reviewForm) {
  reviewForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = reviewForm.querySelector('button[type="submit"]');
    const values = new FormData(reviewForm);
    const review = {
      customerName: String(values.get("customerName") || "").trim(),
      productName: String(values.get("productName") || "").trim(),
      rating: Number(values.get("rating")),
      reviewText: String(values.get("reviewText") || "").trim()
    };
    if (!review.customerName || !review.productName || !review.reviewText || review.rating < 1 || review.rating > 5) {
      if (reviewStatus) reviewStatus.textContent = "Please complete every field and choose a rating.";
      return;
    }
    if (submitButton) submitButton.disabled = true;
    if (reviewStatus) reviewStatus.textContent = "Submitting your review...";
    try {
      await window.yovaSubmitReview(review);
      reviewForm.reset();
      if (reviewStatus) reviewStatus.textContent = "Thank you! Your review was sent to YOVA Collections.";
    } catch (error) {
      console.error("Review submission failed:", error);
      if (reviewStatus) reviewStatus.textContent = "Could not send the review. Please try again later.";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}