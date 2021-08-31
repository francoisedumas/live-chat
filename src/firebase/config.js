import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDT9WkocBM3Odt9tFb9NPOandT9c6cL1cE",
  authDomain: "udemy-vue-firebase-4b6ad.firebaseapp.com",
  projectId: "udemy-vue-firebase-4b6ad",
  storageBucket: "udemy-vue-firebase-4b6ad.appspot.com",
  messagingSenderId: "75839323323",
  appId: "1:75839323323:web:321bf8d40d1b20f29bbd9e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp, projectAuth }