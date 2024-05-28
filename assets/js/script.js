import { actualizarPersona, obtenerPersonas, registrarPersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
    cargarDatos();
});

const registrar = ()=>{
    // Recuperar elemento
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eNacimiento = document.getElementById("fnacimiento");
    let eRut = document.getElementById("rut");
    let eCorreo = document.getElementById("correo");
    let eEdad = document.getElementById("edad");
    // Recuperar el valor
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vNacimiento = eNacimiento.value;
    let vRut = eRut.value;
    let vCorreo = eCorreo.value;
    let vEdad = eEdad.value;
    // Crear un objeto
    let objeto = {nombre:vNombre, apellido:vApellido, fnacimiento:vNacimiento, rut:vRut, correo:vCorreo, edad:vEdad};
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
            estructura += "<td> <button id='UPD"+persona.id+"'>Actualizar</button></td>"; //Botón UPDATE
            estructura += "<td> <button id='DEL'"+persona.id+"'>Eliminar</button></td>";  //Botón DELETE
            estructura += "<tr>"
        });
        document.getElementById("tbDatos").innerHTML = estructura;

        personas.forEach((persona)=>{
            let botonUPD = document.getElementById("UPD"+persona.id);
            botonUPD.addEventListener("click",()=>{
                let enombre = document.getElementById("UPDnombre");
                let eapellido = document.getElementById("UPDapellido");
                let efechanac = document.getElementById("UPDfecha_nacimiento");     //CUIDADO CON EL NOMBRE DE LA VARIABLE; DEBO USAR FNACIMIENTO
                let erut = document.getElementById("UPDrut");
                let ecorreo = document.getElementById("UPDcorreo");
                let eedad = document.getElementById("UPDedad");
                enombre.value = persona.nombre;
                eapellido.value = persona.apellido;
                erut.value = persona.rut;
                ecorreo.value = persona.correo;
                efechanac.value = persona.fechaNacimiento;
                eedad.value = persona.edad;
                document.getElementById("btnActualizar").value = persona.id;
            })
        })
    });
}

const actualizar = ()=>{
    // Recuperar elemento
    let eNombre = document.getElementById("UPDnombre");
    let eApellido = document.getElementById("UPDapellido");
    let eNacimiento = document.getElementById("UPDfnacimiento");
    let eRut = document.getElementById("UPDrut");
    let eCorreo = document.getElementById("UPDcorreo");
    let eEdad = document.getElementById("UPDedad");
    // Recuperar el valor
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vNacimiento = eNacimiento.value;
    let vRut = eRut.value;
    let vCorreo = eCorreo.value;
    let vEdad = eEdad.value;
    // Crear un objeto
    let objeto = {nombre:vNombre, apellido:vApellido, fnacimiento:vNacimiento, rut:vRut, correo:vCorreo, edad:vEdad};
    let id = document.getElementById("btnActualizar"),value;
    console.log(objeto);
    actualizarPersona(objeto,id).then(()=>{
        alert("Se ha actualizado con éxito");
        cargarDatos();
    });

}

