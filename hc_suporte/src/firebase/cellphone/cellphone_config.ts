import { addDoc, collection, query, where } from "firebase/firestore/lite";

import { db } from "../firebase.utils";


export const registerCellphone = async(data:any)=>{
    try{       
        const cellRef = await addDoc(collection(db, "cellphones"),{
            brand:data.brand,
            model:data.model,
            color:data.color,
            uid:data.uid,
        })
        console.log('Document Writen with ID=> ', cellRef.id)
    }catch(error:any){
        console.log("ERROR CODE: ", error.code + "ERROR MESSAGE: ", error.message)
    }
}

export const listCellphonesByUserId = async(uid:string)=>{
    const celRef = collection(db, "cellphones");
    const q = query(celRef, where("uid", "==", uid));
    return q;
}