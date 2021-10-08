import firebase from "firebase/app";

// 사용할 것들을 전부 불러옵니다 :)
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQ-r14ZRwfXQz--uFguGlaNAVxNzAHq0A",
  authDomain: "hh-community-c5bcf.firebaseapp.com",
  projectId: "hh-community-c5bcf",
  storageBucket: "hh-community-c5bcf.appspot.com",
  messagingSenderId: "530666657141",
  appId: "1:530666657141:web:bd48ea9b4ddde840846f3c",
  measurementId: "G-P61CMKJLL5" 
  
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
