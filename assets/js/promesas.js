import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
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
        //console.log(doc.id);
        //console.log(doc.data());
        listado.push({...doc.data(),id:doc.id});   //Se agregó un id a los objetos.
    });
    return listado;
}

export const actualizarPersona = async(objeto,id)=>{
    const ref = doc(db,"persona",id);
    await updateDoc(ref,objeto);
}

export const eliminarPersona = async(id)=>{
    const ref = doc(db,"persona",id);
    await deleteDoc(ref);
}