
import { initializeApp }    from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc,
         setDoc, updateDoc, deleteDoc, doc, query,
         orderBy, where, limit, getDoc }
  from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDokXqRJgfpOT2Ax8bKsqAf8aQXBfNI2gY",
  authDomain:        "pa-parchar.firebaseapp.com",
  projectId:         "pa-parchar",
  storageBucket:     "pa-parchar.firebasestorage.app",
  messagingSenderId: "264991300918",
  appId:             "1:264991300918:web:dba1874bd25f934c956797"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, getDocs, addDoc, setDoc, updateDoc,
         deleteDoc, doc, query, orderBy, where, limit, getDoc };
