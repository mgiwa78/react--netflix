// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACWN6OVeDO1MzNnjvOyt4LXqZbAl0uuuo",
  authDomain: "react--netflix.firebaseapp.com",
  projectId: "react--netflix",
  storageBucket: "react--netflix.appspot.com",
  messagingSenderId: "120212383434",
  appId: "1:120212383434:web:dcb69b3641786b2f20f633",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export const SignUpWithEmailAndPassword = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const userId = user.uid;

  // const querySnapshot = await getDocs(collection(db, `users/${userId}`));

  console.log(user);
  return user;
};
export const SignUserIn = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);

  // const querySnapshot = await getDocs(collection(db, `users/${userId}`));

  console.log(user);
  return user;
};

export const AuthHandler = (callback) => {
  onAuthStateChanged(auth, () => {
    console.log(auth);
    callback(auth);
  });
};

export const createUserDocFromAuth = async (userAuth, full_name) => {
  console.log(userAuth);
  const userRef = doc(db, "users", userAuth.uid);

  try {
    const docSnapshot = await getDoc(userRef);
    if (!docSnapshot.exists()) {
      const date = new Date();

      await setDoc(userRef, { full_name, created_at: date });
    }
  } catch (error) {
    if (error.message === "Firebase: Error (auth/network-request-failed).")
      return alert("No network connection, check your network and try again");
    else alert(error.message);
  }

  return userRef;
};

export const SignUserOut = () => {
  signOut(auth);
};
