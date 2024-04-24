// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "import.meta.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "disneyplus-clone-60ba8.firebaseapp.com",
  projectId: "disneyplus-clone-60ba8",
  storageBucket: "disneyplus-clone-60ba8.appspot.com",
  messagingSenderId: "672706953477",
  appId: "1:672706953477:web:5d6d8835de5b9b22fe376c",
  measurementId: "G-E9K6YETVG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;