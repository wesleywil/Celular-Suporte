// Import the functions you need from the SDKs you need

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore/lite";

import { db } from "../firebase.utils";
import { auth } from "../firebase.utils";


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
export const getUserInfo = async(uid:string)=>{
    const docRef = doc(db, `users/${uid}`)
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        
        return docSnap.data()
    }else{
        console.log('User not found')
    }
}

