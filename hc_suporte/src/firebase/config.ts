// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8f7ZKMJDhr---F3wdvxJQsleHVQuhKRI",
    authDomain: "hc-suporte.firebaseapp.com",
    projectId: "hc-suporte",
    storageBucket: "hc-suporte.appspot.com",
    messagingSenderId: "430710885800",
    appId: "1:430710885800:web:a507705e795890ac64e19d",
    measurementId: "G-RP980QZ6JX"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const handleSignUp = async(data:any) =>{
    try{
        const result = await createUserWithEmailAndPassword(auth, data.email, data.password)

        const userRef = doc(db, `users/${result.user.uid}`);
        await setDoc(userRef, {
            displayName:data.displayName,
            email:result.user.email,
            uid:result.user.uid,
            ...data
        })
    }catch(error:any){
        console.log('CODE: ', error.code + " MESSAGE: ", error.message);
    }
}

export const handleSignIn = async(data:any)=>{
    try{
        const result = await signInWithEmailAndPassword(auth, data.email, data.password)
        console.log('usuario logado é => ', result.user)
    }catch(error:any){
        console.log('CODE: ', error.code + " MESSAGE: ", error.message); 
    }
    
}

export const handleLogout = async()=>{
    signOut(auth).then(()=>{
        console.log("Signed out successfully")
    }).catch((error:any)=>{
        console.log('CODE: ', error.code + " MESSAGE: ", error.message); 
    })
}

// export const getCurrentUser = ()=>{
//     onAuthStateChanged(auth, (user)=>{
//         if(user){
//             const uid = user.uid;
//             console.log('uid=> ', user)
//             return uid
//         }else{
//             console.log('user is logged out')
//         }
//     })
// }