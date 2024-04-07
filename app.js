const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 640) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUFzTnKUmdADtHiM35l70FpnS6v3K_B-w",
  authDomain: "calcium-bot-377622.firebaseapp.com",
  databaseURL: "https://calcium-bot-377622-default-rtdb.firebaseio.com",
  projectId: "calcium-bot-377622",
  storageBucket: "calcium-bot-377622.appspot.com",
  messagingSenderId: "243187500963",
  appId: "1:243187500963:web:e491e69f8d61c26745bc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log('====================================');
console.log(db);
console.log('====================================');
