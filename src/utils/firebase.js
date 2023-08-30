// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-D-If7iyDij3GvYRsFIZSmpwJOOeMYbA",
  authDomain: "netflix-61f47.firebaseapp.com",
  projectId: "netflix-61f47",
  storageBucket: "netflix-61f47.appspot.com",
  messagingSenderId: "848204561444",
  appId: "1:848204561444:web:b03cf033ec6a999135ecb1",
  measurementId: "G-S151TFH1FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();