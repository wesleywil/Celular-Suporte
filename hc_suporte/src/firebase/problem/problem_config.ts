import { addDoc, collection, getDocs, query, where } from "firebase/firestore/lite";

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

export const listProblemsByUid = async(uid:string)=>{
    const proRef = collection(db, "problems");
    const q = query(proRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q)
    let data:any = [];
    querySnapshot.forEach((doc)=>{
        data.push(doc.data())
    })
    return data;

}

export const listProblemsByUidAndStatus = async(uid:string, status:string)=>{
    const q = query(collection(db, "problems"),
    where("uid", "==", uid),
    where("status", "==", status),
    );
    const docsSnap = await getDocs(q);
    let data:any = [];
    docsSnap.forEach((doc)=>{
        data.push(doc.data())
    })
    return data;
}