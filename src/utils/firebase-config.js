
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuDFADBQzFPrnuc7mGYzN4xqdpGJbz_N4",
  authDomain: "netflix-clone-d9a8b.firebaseapp.com",
  projectId: "netflix-clone-d9a8b",
  storageBucket: "netflix-clone-d9a8b.firebasestorage.app",
  messagingSenderId: "673722215668",
  appId: "1:673722215668:web:f7ffe0ab862569476e42a1",
  measurementId: "G-46R5CJ35RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);
