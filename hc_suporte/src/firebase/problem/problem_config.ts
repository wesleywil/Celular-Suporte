import { addDoc, collection } from "firebase/firestore/lite";

import { db } from "../firebase.utils";

export const registerProblem = async(data:any)=>{
    const createdAt = new Date();
    try{ 
        const proRef = await addDoc(collection(db, "problems"),{
            ...data,
            created_at: createdAt,
            
        })
        console.log('Document Writen with ID=> ', proRef.id)
    }catch(error:any){
        console.log("ERROR CODE: ", error.code + "ERROR MESSAGE: ", error.message)
    }
}