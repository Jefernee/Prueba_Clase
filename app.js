// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
 let nombre = document.getElementById("amigo").value; // Captura el valor del campo de entrada
 amigos.push(nombre); // Agrega el nombre al array de amigos

// Crear un nuevo elemento <li>
 let nuevoAmigo = document.createElement("li"); // Asigna el nombre al contenido del <li>
 nuevoAmigo.textContent = nombre; // Asigna el nombre al contenido del <li>
 
 // Añadir el <li> a la lista de amigos
 document.getElementById("listaAmigos").appendChild(nuevoAmigo);

 // Limpiar el campo de entrada después de agregar
 document.getElementById("amigo").value = "";
}


function sortearAmigo(){
    // Validar que haya amigos disponibles
  if (amigos.length === 0){
    alert("no hay amigos disponibles para seleccionar");
    return // Salir de la función si el array está vacío
  }

  //Generar un indice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  console.log("El indice aleatorio es", indiceAleatorio); // Mostrar el índice aleatorio

  //seleccionar el amigo que corresponde al indice aleatorio
  let amigoSeleccionado = amigos[indiceAleatorio];
  console.log("El amigo seleccionado es", amigoSeleccionado); //mostrar el amigo seleccionado
  
  

  // Crear un nuevo elemento <li> para mostrar el amigo seleccionado
  let seleccionAmigo = document.createElement("li");
  seleccionAmigo.textContent = amigoSeleccionado; // Asigna el nombre al contenido del <li>

  document.getElementById("resultado").appendChild(seleccionAmigo);

}