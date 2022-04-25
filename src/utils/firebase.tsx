import { initializeApp } from "firebase/app";
import TaskType from './../types/Task'

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
  FieldPath,
  setDoc,
  doc,
  Timestamp
} from "firebase/firestore";

class Task {
  [x: string]: any;
  constructor(Task : TaskType) {
    this.type = Task.type;
    this.id = Task.id;
    this.creationDate = Task.creationDate;
    this.name = Task.name;
    this.date = Task.date;
    this.priority = Task.priority || 2;
    this.reward = Task.reward || 0;
    this.status = Task.status || 'incomplete';
    this.labels = Task.labels;
    this.tags = Task.tags || [];
  }
}

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

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs : any = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoURL: user.photoURL
      });
    } else {
      return {user: user};
    }
  } catch (err : any) {
    console.error(err);
    alert(err.message);
    return false;
  }
};

export const getGoogleUserData = async () => {
  const user = auth.currentUser;
  if (user !== null) {
    return user;
  }
}

export const getFirebaseUserTasks = async (uid : string) => {
  const q = query(collection(db, "tasks"), where("userID", "==", uid));
  let tasks : any = []
  const docs : any = await getDocs(q);
  docs.forEach((doc : any) => {
    let retrievedTask = doc.data();
    let taskOptions : TaskType = {
      date: new Date('December 17, 1995 15:30:00'),
      type: retrievedTask.type,
      id: doc.id,
      name: retrievedTask.name,
      creationDate: retrievedTask.creationDate.seconds,
      priority: retrievedTask.priority,
      reward: retrievedTask.reward,
      status: retrievedTask.status,
      labels: retrievedTask.labels
    };

    let task = new Task(taskOptions);
    tasks.push(task);
  })
  return tasks;
}

export const AddTask = async (taskData : any) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await addDoc(collection(db, 'tasks'), {
        name: taskData.name,
        type: 'unique',
        labels: [1,3],
        creationDate: Timestamp.fromDate(new Date()),
        dueDate: Timestamp.fromDate(new Date()),
        priority: 2,
        status: 'incomplete',
        userID: user.uid
      })
      return true
    } catch (err) {
      console.error(err)
      return err
    }
  }
}

export default db;
