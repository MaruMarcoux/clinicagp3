// var nombre= document.getElementById('nombre');
// var email= document.getElementById('email');
// var mensaje= document.getElementById('mensaje');
// var form= document.getElementById('form');
// var error=document.getElementById('error');
// error.style.color ='red';


// function enviarFormulario(){
// var mensajesError=[];

// if(nombre.value === null || nombre.value=== ''){
//     mensajesError.push('Ingresa tu nombre');
// }

// error.innerHTML= mensajesError.join();
// }







 var nombre = document.getElementById('nombre');
 var email = document.getElementById('email');
 var mensaje = document.getElementById('mensaje');
 var form = document.getElementById('form');
error.style.color = 'red';  
error2.style.color = 'red';
error3.style.color = 'red'

 function validarCorreo(correo) {
      // Expresión regular para validar un correo electrónico
  var expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return expresionCorreo.test(correo);
  }


 function enviarFormulario() {
    console.log('se envio el formulario');
    
    var mensajesErrorNombre = [];
    var mensajesErrorCorreo = [];
    var mensajesErrorMensaje = [];

    // Validación del nombre
    if (nombre.value === null || nombre.value=== '' || nombre.value.length < 6) {
        mensajesErrorNombre.push('Por favor, ingresa tu nombre, mínimo 6 caracteres.');
    }
    error.innerHTML = mensajesErrorNombre.join('<br>');
    
    // Validación del correo electrónico
    if (!validarCorreo(email.value)) {
        mensajesErrorCorreo.push('Por favor, ingresa un correo electrónico válido.');
    }
    error2.innerHTML = mensajesErrorCorreo.join('<br>');
    
    // Validación del mensaje

    if (mensaje.value === null || nombre.value === '') {
        mensajesErrorMensaje.push('Por favor, ingresa tu mensaje ');
    }
     error3.innerHTML = mensajesErrorMensaje.join('<br>');
    return false;
}

   
    
//     if (mensaje.value.trim() === '') {
//          mensajesError.push('Por favor, ingresa un mensaje.');
//     }
    
// // }


