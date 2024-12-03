// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiqzzsGH_fR9UTKbK0opl1quP0tBgotiU",
    authDomain: "backend-project-92187.firebaseapp.com",
    projectId: "backend-project-92187",
    storageBucket: "backend-project-92187.firebasestorage.app",
    messagingSenderId: "868012179828",
    appId: "1:868012179828:web:ed4373675fa6d898146c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
