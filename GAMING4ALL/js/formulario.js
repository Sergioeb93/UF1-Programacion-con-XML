document.getElementById('suscripcionform').addEventListener("submit", function (event) {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('e-mail').value.trim();

    if (nombre === '' || apellido === '' || email === ''){
        alert ("Por favor, completa todos los campos del formulario antes de hacer click en enviar");
    }})