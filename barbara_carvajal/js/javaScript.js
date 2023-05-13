// Cambiar los campos de texto a mayúscula por sí sólo
const camposTexto = document.querySelectorAll('input[type="text"]');

camposTexto.forEach(campo => {
  campo.addEventListener('input', () => {
    campo.value = campo.value.toUpperCase();
  });
});

// Validar RUT
const campoRut = document.getElementById('rut');

campoRut.addEventListener('blur', () => {
  const rut = campoRut.value;
  const regex = /^[0-9]+-[0-9kK]{1}$/;

  if (!regex.test(rut)) {
    alert('El RUT ingresado no es válido. Por favor, ingrese un RUT válido.');
    campoRut.value = '';
    campoRut.focus();
  }
});

// Validar formato del correo electrónico
const campoCorreo = document.getElementById('correo');

campoCorreo.addEventListener('blur', () => {
  const correo = campoCorreo.value;
  const regex = /^\S+@\S+\.\S+$/;

  if (!regex.test(correo)) {
    alert('El formato del correo electrónico ingresado no es válido. Por favor, ingrese un correo electrónico válido.');
    campoCorreo.value = '';
    campoCorreo.focus();
  }
});


// boton falso
// Generar un número aleatorio entre 0 y 99999
const contadorNumero = Math.floor(Math.random() * 100);

// Mostrar el número en el HTML
document.getElementById('contador-numero').textContent = contadorNumero.toString();


// bienvenida

// Cuando la página está completamente cargada, mostramos la ventana emergente
window.addEventListener('load', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
});

// Cuando se carga la ventana, se muestra la ventana emergente y se agrega un evento de clic al botón "cerrar"
window.onload = function() {
    var popup = document.querySelector('.popup');
    var closePopup = document.querySelector('#close-popup');
    
    popup.style.display = 'flex';
    
    closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
    });
}

  