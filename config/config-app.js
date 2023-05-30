
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBipbWOAe11YV1RjoPmf_3vSZG1-ZzEiM",
    authDomain: "evpazarlama-53bc6.firebaseapp.com",
    projectId: "evpazarlama-53bc6",
    storageBucket: "evpazarlama-53bc6.appspot.com",
    messagingSenderId: "784531995178",
    appId: "1:784531995178:web:e84e605590466e4272e153"
};

// Initialize Firebase app for get start
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// path of collection in fireStore database on real time update
const allAdsCollection = query(collection(db, 'allAds'));

export { allAdsCollection };


// https://firebase.google.com/docs/web/setup#available-libraries