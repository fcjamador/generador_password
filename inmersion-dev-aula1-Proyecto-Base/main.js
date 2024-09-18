let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let estadoContrasena = document.getElementById('estado-contrasena');
let barraEstado = document.getElementById('barra-estado');
let nivelFuerza = document.getElementById('nivel-fuerza');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8){
        alert('La cantidad no puede ser menor a 8');
        return;
    }
    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() *  cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    contrasena.value = password;
    let fuerzaContraseña = calcularFuerzaContraseña(password); // Utilizar la función calcularFuerzaContraseña()
    actualizarEstadoContraseña(fuerzaContraseña); // Llamar a actualizarEstadoContraseña() siempre

    if (fuerzaContraseña === 'Débil') {
        alert('La contraseña generada es débil. Por favor, inténtelo de nuevo.');
    }
}


function actualizarEstadoContraseña(fuerza) {
    let barraEstado = document.getElementById('barra-estado-inner');
    let nivelFuerza = document.getElementById('nivel-fuerza');

    if (fuerza === 'Fuerte') {
        barraEstado.style.width = '100%';
        barraEstado.style.backgroundColor = '#4CAF50';
        nivelFuerza.textContent = 'Fuerte';
    } else if (fuerza === 'Media') {
        barraEstado.style.width = '50%';
        barraEstado.style.backgroundColor = '#FFC107';
        nivelFuerza.textContent = 'Media';
    } else {
        barraEstado.style.width = '0%';
        barraEstado.style.backgroundColor = '#ccc';
        nivelFuerza.textContent = 'Débil';
    }
}


function calcularFuerzaContraseña(contrasena) {
    let fuerza = 0;

    // Verificar si la contraseña tiene al menos 8 caracteres
    if (contrasena.length >= 8) {
        fuerza += 1;
    }

    // Verificar si la contraseña tiene al menos una mayúscula
    if (/[A-Z]/.test(contrasena)) {
        fuerza += 1;
    }

    // Verificar si la contraseña tiene al menos una minúscula
    if (/[a-z]/.test(contrasena)) {
        fuerza += 1;
    }

    // Verificar si la contraseña tiene al menos un número
    if (/[0-9]/.test(contrasena)) {
        fuerza += 1;
    }

    // Verificar si la contraseña tiene al menos un carácter especial
    if (/[^A-Za-z0-9]/.test(contrasena)) {
        fuerza += 1;
    }

    // Devolver la fuerza de la contraseña
    if (fuerza === 5) {
        return 'Fuerte';
    } else if (fuerza >= 3) {
        return 'Media';
    } else {
        return 'Débil';
    }
}
function limpiar(){
    contrasena.value = '';
    cantidad.value = '';
    nivelFuerza.textContent = '';
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
}