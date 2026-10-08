/**
 * YOVA COLLECTIONS - FIREBASE CONFIGURATION
 * 
 * INSTRUCTIONS FOR ACTIVATION:
 * 1. Go to Firebase Console (https://console.firebase.google.com/)
 * 2. Create a new project (e.g., "yova-collections")
 * 3. Add a Web App (</>) and copy your firebaseConfig object.
 * 4. Replace the placeholder values below with your real project keys.
 * 5. Enable Email/Password in Authentication > Sign-in method.
 * 6. Create Cloud Firestore in test or production mode (apply firestore.rules).
 * 7. Enable Firebase Storage (apply storage.rules).
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// =========================================================================
// REPLACE THESE VALUES WITH YOUR FIREBASE PROJECT CREDENTIALS
// =========================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyBPpqm1sDBRhQXSjSyjN4vp9f_y4oCXFBU",
  authDomain: "yova-collections.firebaseapp.com",
  projectId: "yova-collections",
  storageBucket: "yova-collections.firebasestorage.app",
  messagingSenderId: "700218640312",
  appId: "1:700218640312:web:c3969e80991e859cf2b14d",
  measurementId: "G-Q1XQE0951Q"
};

export function isFirebaseConfigured() {
  return (
    Boolean(firebaseConfig.apiKey) &&
    firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY" &&
    !firebaseConfig.apiKey.includes("YOUR_")
  );
}

let app = null;
let auth = null;
let db = null;
let storage = null;

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    console.log("✨ Firebase successfully initialized for YOVA Collections");
  } catch (err) {
    console.error("⚠️ Firebase initialization failed:", err);
  }
} else {
  console.warn(
    "⚠️ Firebase configuration placeholders detected in firebase-config.js. " +
    "YOVA Collections will operate in fallback mode until you paste your Firebase keys."
  );
}

export { 
  app, 
  auth, 
  db, 
  storage,
  // Auth methods
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  // Firestore methods
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  // Storage methods
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
};
