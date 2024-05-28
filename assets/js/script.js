import { registrarPersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
});

const registrar = ()=>{
    // Recuperar elemento
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eNacimiento = document.getElementById("fnacimiento");
    let eRut = document.getElementById("rut");
    let eCorreo = document.getElementById("correo");
    // Recuperar el valor
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vNacimiento = eNacimiento.value;
    let vRut = eRut.value;
    let vCorreo = eCorreo.value;
    // Crear un objeto
    let objeto = {nombre:vNombre, apellido:vApellido, fnacimiento:vNacimiento, rut:vRut, correo:vCorreo};
    console.log(objeto)
    registrarPersona(objeto).then(()=>{
        alert("Registrado con éxito")
    }).catch((r)=>{
        alert("Algo ocurrio")
        alert(r);
    });
}