document.querySelector("#btnRegistrar").addEventListener("click", validar);
function validar() {
  /**evento.preventDefaul() */

  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("lastname").value;
  let cedula = document.getElementById("idcard").value;
  let correo = document.getElementById("email").value;
  let contrasena = document.getElementById("password").value;
  let auxNum = false;
  let error = false;
  if (nombre == "") {
    alert("Debe ingresar un nombre");
    evento.preventDefaul();
    error = true;
  }
  if (apellido == "") {
    alert("Debe ingresar un apellido");
    evento.preventDefaul();
    error = true;
  }
  if (cedula == "") {
    alert("Debe ingresar una cedula");
    evento.preventDefaul();
    error = true;
  }
  if (correo == "") {
    alert("Debe ingresar un correo");
    evento.preventDefaul();
    error = true;
  }
  if (contrasena == "") {
    alert("Debe ingresar una contrasena");
    evento.preventDefaul();
    error = true;
  } else {
    /*  alert(nombre+" "+apellido+""+cedula+""+correo+""+contrasena) **/
    let vectorPassword = contrasena.split("");
    for (let i = 0; i < vectorPassword.length; i++) {
      if (
        (vectorPassword =
          [i] == 0 ||
          vectorPassword[1] == 2 ||
          vectorPassword[1] == 3 ||
          vectorPassword[1] == 4 ||
          vectorPassword[1] == 5 ||
          vectorPassword[1] == 6 ||
          vectorPassword[1] == 7 ||
          vectorPassword[1] == 8 ||
          vectorPassword[1] == 9)
      ) {
        auxNum = true;
        break;
      }
    }
  }
  if (auxNum == true) {
    if (vectorPassword.length > 5) {
    } else {
      alert("debe ingresar al menos un numero en la contrasena ");
      error = true;
      evento.preventDefault();
    }
  } else {
    alert("Debe ingresar al menos un número en la contrasena");
    error = true;
    evento.preventDefault();
  }
  if (error == false) {
    alert("Usuario creado exitosamente");
  }
}
