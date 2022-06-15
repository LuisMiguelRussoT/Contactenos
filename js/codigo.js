function imprimir() {

    let nombre = document.getElementsByName("nombre")[0].value;
    const correo = document.getElementsByName("correo")[0].value;
    const asunto = document.getElementsByName("asunto")[0].value;
    const mensaje = document.getElementsByName("mensaje")[0].value;

    alert("informacion enviada" );

   if (nombre == "") {
        alert("!Falta el campo Nombre Completo!")
    }
    else { console.log(nombre); }

    if (correo == "") {
        alert("!Falta el campo Correo Electronico!")
    }
    else { console.log(correo); }

    if (asunto == "") {
        alert("!Falta el campo Asunto!")
    }
    else { console.log(asunto); }

    if (mensaje == "") {
        alert("!Falta el campo Mensaje!")
    }
    else { console.log(mensaje); }



}


function resetear() {
    document.getElementById("correo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";

    console.log(nombre);

}
