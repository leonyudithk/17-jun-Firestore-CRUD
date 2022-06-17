
import { initializeApp } from "@firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXzxaKd1jDKShABq3zoPWyN2HWDfOD78k",
  authDomain: "frontend-11-2022.firebaseapp.com",
  projectId: "frontend-11-2022",
  storageBucket: "frontend-11-2022.appspot.com",
  messagingSenderId: "468343678334",
  appId: "1:468343678334:web:1084d4e3971df656823f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const bataBase = getFirestore()

export default app
