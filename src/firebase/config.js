import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD53egVIC7eTgtz1fjmb5C6VJ22FgULp1w",
    authDomain: "proyectofinalsolis.firebaseapp.com",
    projectId: "proyectofinalsolis",
    storageBucket: "proyectofinalsolis.firebasestorage.app",
    messagingSenderId: "994698488400",
    appId: "1:994698488400:web:882c45bdeb2dda4bcabf55"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);