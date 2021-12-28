import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQ8pTBsWAOLUN9z_Cainh8CJp__wH5BnE",
  authDomain: "web3chat.firebaseapp.com",
  projectId: "web3chat",
  storageBucket: "web3chat.appspot.com",
  messagingSenderId: "34028045301",
  appId: "1:34028045301:web:7d740956965141f8b6d6bc"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const storage = getStorage();

export { app, storage };