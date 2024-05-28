import {collection,addDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarPersona = async(persona)=>{
    console.log("persona")
    console.log(persona)
    const docRef = await addDoc(collection(db, "persona"), persona);
}