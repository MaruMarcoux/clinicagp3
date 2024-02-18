const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    const email = emailInput.value.trim()
    const pass = passInput.value.trim()

    if (email !== "usuario1@gmail.com" || pass !== "password1") {
        warnings += "Credenciales incorrectas. Inténtalo de nuevo."
    }

    if (warnings) {
        parrafo.innerHTML = warnings
    } else {
        localStorage.setItem("emailUsuario", email)
        parrafo.innerHTML = "Acceso permitido"
        // Redirigir al usuario a user.html en la carpeta raíz
        window.location.href = "reservation.html";
    }
})
