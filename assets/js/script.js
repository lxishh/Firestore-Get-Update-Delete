import { obtenerPersonas, registrarPersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    cargarDatos();
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
        cargarDatos();
    }).catch((r)=>{
        alert("Algo ocurrio")
        alert(r);
    });
}
const cargarDatos = ()=>{
    // Recuperar lo registrado en la base de datos
    obtenerPersonas().then((personas)=>{
        console.log("recuperado")
        console.log(personas)
        let estructura = "";
        personas.forEach((persona)=>{
            estructura += "<tr>";
            estructura += "<td>" + persona.nombre + "<td>"
            estructura += "<td>" + persona.apellido + "<td>"
            estructura += "<td>" + persona.rut + "<td>"
            estructura += "<td>" + persona.correo + "<td>"
            estructura += "<td>" + persona.fnacimiento + "<td>"
            estructura += "<td>" + persona.edad + "<td>"
            estructura += "<tr>"
        })
        document.getElementById("tbDatos").innerHTML = estructura;
    });
}