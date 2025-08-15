//script of login.html file

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxgqgfdgFUNmXOc-0QhDS_2kit9gY0SV4",
    authDomain: "javascript-cae2f.firebaseapp.com",
    projectId: "javascript-cae2f",
    storageBucket: "javascript-cae2f.appspot.com",
    messagingSenderId: "51115939371",
    appId: "1:51115939371:web:0ef0eb4115a1da59fb7c6e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Verfication success");
const userAgent = navigator.userAgent.toLowerCase();
let devices = "";
if (/android/.test(userAgent)) {
    devices = "android devices";

    
} else if (/iphone|ipad|ipod/.test(userAgent)) {
    devices = "you have iphone or ipad or ipod"
    
} else if (/windows/.test(userAgent)) {
    devices = "you have windows";
    
} else if (/mac/.test(userAgent)) {
    devices = "mac "
    
} else if (/linux/.test(userAgent)) {
    devices = "linux";
    
} else {
    devices = "unknow ??";
}
console.log("Varibale : " + devices);
try {
    const docRef = await addDoc(collection(db, "testmode"), {
          device: devices,
          userAgent:userAgent
          
        });
} catch (error) {
    console.error(error);
    
}

