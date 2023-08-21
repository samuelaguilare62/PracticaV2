function filterProducts() {
  var selectBox = document.getElementById("categoria");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var products = document.querySelectorAll('.producto');
  for (var i = 0; i < products.length; i++) {
    if (selectedValue == "todos") {
      products[i].style.display = "block";
    } else if (products[i].dataset.categoria == selectedValue) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

/* Obtener referencia al modal
const miModal = document.getElementById("miModal");

// Mostrar el modal al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  miModal.style.display = "block";
});

// Obtener referencia al botón de aceptar
const aceptarBtn = document.getElementById("cerrarModal");

// Obtener referencia al checkbox de términos y condiciones
const terminosCheckbox = document.getElementById("terminosCheckbox");

// Agregar controlador de evento al botón de aceptar
aceptarBtn.addEventListener("click", function() {
  // Verificar si el checkbox está marcado
  if (terminosCheckbox.checked) {
    // Acciones a realizar si se aceptan los términos y condiciones
    // ...
    console.log("Términos y condiciones aceptados. Acciones realizadas.");
    miModal.style.display = "none"; // Ocultar el modal al aceptar los términos
  } else {
    // Alerta al usuario para marcar el checkbox
    alert("Debes aceptar los Términos y Condiciones para continuar.");
  }
});
*/

// Obtener referencia al modal
const miModal = document.getElementById("miModal");

// Mostrar el modal al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  miModal.style.display = "block";
});

// Obtener referencia al botón de aceptar
const aceptarBtn = document.getElementById("cerrarModal");

// Obtener referencia al botón de no acepto
const noAceptoBtn = document.getElementById("noAcepto");

// Obtener referencia al checkbox de términos y condiciones
const terminosCheckbox = document.getElementById("terminosCheckbox");

// Agregar controlador de evento al botón de aceptar
aceptarBtn.addEventListener("click", function() {
  // Verificar si el checkbox está marcado
  if (terminosCheckbox.checked) {
    // Acciones a realizar si se aceptan los términos y condiciones
    // ...
    console.log("Términos y condiciones aceptados. Acciones realizadas.");
    miModal.style.display = "none"; // Ocultar el modal al aceptar los términos
  } else {
    // Alerta al usuario para marcar el checkbox
    alert("Debes aceptar los Términos y Condiciones para continuar.");
  }
});

// Agregar controlador de evento al botón de no acepto
noAceptoBtn.addEventListener("click", function() {
  // Cerrar la página
  window.close();
});


