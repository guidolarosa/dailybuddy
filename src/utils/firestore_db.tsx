import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5z0mLCgxp1R2_6lq3CsBpUMIBOpxat5I",
    authDomain: "daily-buddy-d97d7.firebaseapp.com",
    projectId: "daily-buddy-d97d7",
    storageBucket: "daily-buddy-d97d7.appspot.com",
    messagingSenderId: "271640125927",
    appId: "1:271640125927:web:d9e6549db0523358e05d42",
    measurementId: "G-3Z3YFDH6RT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;