// Sección de pagina principal
// Esperar a que el contenido de la página se haya cargado
window.addEventListener('load', () => {
  // Seleccionar los elementos por ID
  const imagen = document.getElementById('imagen__Paginaprincipal');
  const titulo = document.getElementById('titulo__Paginaprincipal');
  const parrafo = document.getElementById('parrafo__Paginaprincipal');
  
  
  // Función para activar la animación de los elementos
  const activarAnimacion = () => {
    // Activar animación en la imagen
    imagen.style.transition = 'opacity 1s ease-in-out'; // Transición de opacidad de 1 segundo (1s)
    imagen.style.opacity = 1; // Cambia la opacidad de 0 a 1, haciendo la imagen visible

    // Activar animación en el título
    titulo.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Transición de opacidad y transformación de 1 segundo
    titulo.style.opacity = 1; // Hace visible el título (opacidad de 0 a 1)
    titulo.style.transform = 'translateY(0)'; // Restaura la posición original del título (sin desplazamiento vertical)

    // Activar animación en el párrafo
    parrafo.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Transición de opacidad y transformación de 1 segundo
    parrafo.style.opacity = 1; // Hace visible el párrafo (opacidad de 0 a 1)
    parrafo.style.transform = 'translateY(0)'; // Restaura la posición original del párrafo (sin desplazamiento vertical)
}

// Llamar a la función para activar las animaciones con un retraso
setTimeout(activarAnimacion, 200); // Se aplica la animación después de un retraso de 200ms
});


// sección de certificados y titulos elección de que mostrar
document.addEventListener("DOMContentLoaded", function () {
  //id del select
  const filtroLogros = document.getElementById("filtro-logros");
  //llamada de certificados y titulos por medio de Id
  const secciones = {
    certificados: document.getElementById("certificados"),
    titulos: document.getElementById("titulos"),
  };

  function mostrarSeccion(seccion) {
    Object.keys(secciones).forEach((key) => {
      secciones[key].classList.toggle("d-none", key !== seccion);
    });
  }

  filtroLogros.addEventListener("change", function () {
    mostrarSeccion(filtroLogros.value);
  });

  // Inicializa mostrando certificados por defecto
  mostrarSeccion("certificados");
});





