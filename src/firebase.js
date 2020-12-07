import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


let config = {
    apiKey: "zzzzzzzzzzzzzzzzzz",
    authDomain: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    projectId: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    storageBucket: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    messagingSenderId: "zzzzzzzzzzzzzzzzzz",
    appId: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
}

  
const fb = firebase.initializeApp(config)
const db = firebase.firestore()

export {fb,db} 