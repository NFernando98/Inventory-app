import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KAY,
  authDomain: "pantry-app-c6b3c.firebaseapp.com",
  projectId: "pantry-app-c6b3c",
  storageBucket: "pantry-app-c6b3c.appspot.com",
  messagingSenderId: "124434327030",
  appId: "1:124434327030:web:8e19a948df45ad14a1d3d7"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
