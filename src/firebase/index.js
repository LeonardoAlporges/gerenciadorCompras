import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAztBQANLmw8qIpu6K3RbY0si4diSCVr90",
    authDomain: "gerenciadorcompras-ebc01.firebaseapp.com",
    projectId: "gerenciadorcompras-ebc01",
    storageBucket: "gerenciadorcompras-ebc01.appspot.com",
    messagingSenderId: "994968539888",
    appId: "1:994968539888:web:3ff8c3f026edfcc9e4e835"
})

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export {
    db,
}