// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDvZqrESrnca3UxgEutGn_i3UWBw6WQfaM",
	authDomain: "challenge-a7f82.firebaseapp.com",
	projectId: "challenge-a7f82",
	storageBucket: "challenge-a7f82.appspot.com",
	messagingSenderId: "1000381691276",
	appId: "1:1000381691276:web:ef7122cc2d6920658e52a9",
	measurementId: "G-552W8N9Y4B",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
