import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcME8nIulxFaWb4HcJ2TTiI8zdVCa0gcI",
  authDomain: "stake-d4343.firebaseapp.com",
  projectId: "stake-d4343",
  storageBucket: "stake-d4343.appspot.com",
  messagingSenderId: "460669965884",
  appId: "1:460669965884:web:f34f5a58f31ded2bd61539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
