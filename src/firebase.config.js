import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArSxYUIrIbjscGBnLKCo8Paz2gR8OnRTo",
  authDomain: "restaursntapp.firebaseapp.com",
  databaseURL: "https://restaursntapp-default-rtdb.firebaseio.com",
  projectId: "restaursntapp",
  storageBucket: "restaursntapp.appspot.com",
  messagingSenderId: "345001500268",
  appId: "1:345001500268:web:262ede62afeeddcc7a0249",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
