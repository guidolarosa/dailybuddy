import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5z0mLCgxp1R2_6lq3CsBpUMIBOpxat5I",
  authDomain: "daily-buddy-d97d7.firebaseapp.com",
  projectId: "daily-buddy-d97d7",
  storageBucket: "daily-buddy-d97d7.appspot.com",
  messagingSenderId: "271640125927",
  appId: "1:271640125927:web:d9e6549db0523358e05d42",
  measurementId: "G-3Z3YFDH6RT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

export default db;
