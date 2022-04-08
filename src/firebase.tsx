import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDHYQlEvs8lX1P7T6d-tbKS2VN_yqxqseM",
    authDomain: "fir-cred-ff525.firebaseapp.com",
    projectId: "fir-cred-ff525",
    storageBucket: "fir-cred-ff525.appspot.com",
    messagingSenderId: "659508437612",
    appId: "1:659508437612:web:a78d6132a39bd6ee176e49",
    measurementId: "G-PW3NE02DEV"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);