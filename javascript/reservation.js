function confirmarReserva() {
    var medico = document.getElementById("medico").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.querySelector('.horaSeleccionada').innerText;

    var mensajeReserva = "Reserva agendada para el médico " + medico + " el día " + fecha + " a las " + hora + ".";

    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var mensaje = document.getElementById("mensajeReserva");
    localStorage.setItem("mensajeReserva", mensajeReserva);
    mensaje.textContent = mensajeReserva;
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function misreservas() {
    // Obtener el mensaje de reserva del almacenamiento local
    var mensajeReserva = localStorage.getItem("mensajeReserva");
    
    // Mostrar el mensaje de reserva en el modal
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var mensaje = document.getElementById("mensajeReserva");
    mensaje.textContent = mensajeReserva;
    modal.style.display = "block";

    // Cerrar el modal cuando se hace clic en la "X" (span)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal cuando se hace clic fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.button').forEach(item => {
            item.classList.remove('horaSeleccionada');
            item.classList.remove('disabled');
        });
        item.classList.add('horaSeleccionada');
        document.querySelectorAll('.button:not(.horaSeleccionada)').forEach(item => {
            item.classList.add('disabled');
        });
    })
});


document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.button').forEach(item => {
            item.classList.remove('horaSeleccionada');
            item.classList.remove('disabled');
        });
        item.classList.add('horaSeleccionada');
        document.querySelectorAll('.button:not(.horaSeleccionada)').forEach(item => {
            item.classList.add('disabled');
        });
    })
});
