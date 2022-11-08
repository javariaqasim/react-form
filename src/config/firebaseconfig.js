// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJfsMPIz_6Rp2dtntj57BOUmR9BV1Ya5s",
  authDomain: "form-f30a0.firebaseapp.com",
  projectId: "form-f30a0",
  storageBucket: "form-f30a0.appspot.com",
  messagingSenderId: "907102938176",
  appId: "1:907102938176:web:4bd2bffee6884feb57aba5",
  measurementId: "G-BV7J0PNXYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
