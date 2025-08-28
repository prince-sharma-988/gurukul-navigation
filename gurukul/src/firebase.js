
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBAwEdo7rv6aiSdPUT_TPVXqvyN98m5Ieo",
  authDomain: "gurukul-navigation-988.firebaseapp.com",
  projectId: "gurukul-navigation-988",
  storageBucket: "gurukul-navigation-988.firebasestorage.app",
  messagingSenderId: "161883747669",
  appId: "1:161883747669:web:f2dd0852c8456c6adaabdc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth }; 
