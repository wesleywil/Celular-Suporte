import { doc, addDoc, collection, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore/lite";

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

export const updateStatusProblem = async(data:any, status:string)=>{
    console.log('WHATS PASSING=> ', data, "STATUS => ", status)
    try{
       const proRef = doc(db, "problems", data.id);
       await updateDoc(proRef, {
        ...data,
        status:status
       })
    }catch(error:any){
        console.log('error code: ', error.code + "- error message:", error.message)
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

export const listProblemsByStatus = async(status:string)=>{
    const q = query(collection(db, "problems"), where("status", "==", status));
    const docsSnap = await getDocs(q);
    let data:any = [];
    docsSnap.forEach((doc)=>{
        data.push({
            id:doc.id,
            ...doc.data(),
        })
    })
    return data;
}