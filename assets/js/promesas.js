import {collection,addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarPersona = async(persona)=>{
    console.log("persona")
    console.log(persona)
    const docRef = await addDoc(collection(db, "persona"), persona);
}

export const obtenerPersonas = async()=>{
    const ref = collection(db,"persona");
    const quearySnap = await getDocs(ref);
    console.log(quearySnap);
    let listado = []
    quearySnap.forEach(doc => {
        console.log(doc.id);
        console.log(doc.data());
        listado.push(doc.data());
    });
    return listado;
}