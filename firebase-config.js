// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 🔥 Your New Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDKtHixAqtV7mt3rLG6O40cD5sag_PPT-4",
  authDomain: "aitdata.firebaseapp.com",
  databaseURL: "https://aitdata-default-rtdb.firebaseio.com", // IMPORTANT (must add manually)
  projectId: "aitdata",
  storageBucket: "aitdata.firebasestorage.app",
  messagingSenderId: "1086041126338",
  appId: "1:1086041126338:web:71fdfaa5ff41218ec1525b",
  measurementId: "G-J2DDR8D9QN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Auto Create Database When Page Opens
export async function initializeDatabase() {
  const dbRef = ref(db, "websiteData");
  const snapshot = await get(dbRef);

  if (!snapshot.exists()) {
    console.log("Database not found. Creating automatically...");

    const defaultData = {};

    for (let i = 1; i <= 700; i++) {
      let num = i.toString().padStart(3, '0');

      defaultData[i] = {
        name: "TrataSoft " + num,
        url: "https://trtdlaita" + num + ".tratasoft.com/login",
        status: "checking",
        networkType: "LAN"
      };
    }

    await set(dbRef, defaultData);
    console.log("Database Created Successfully ✅");
  } else {
    console.log("Database Already Exists ✅");
  }
}

export { db };