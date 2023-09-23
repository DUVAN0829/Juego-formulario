//* Método seleccionar un label como respuesta
let labels = document.querySelectorAll(".respuesta");

labels.forEach((label) => {
  label.addEventListener("click", () => {
    if (label.classList.contains("active")) {
      label.classList.remove("active");
    } else {
      labels.forEach((b) => b.classList.remove("active"));
      label.classList.add("active");
      if (label.lastElementChild.innerText == "B") {
        console.log("bien");
      } else {
        console.log("mal");
      }
    }
  });
});

// * Método cambiar pagina
let paginaActual = 1;

function avanzar() {
  const contenidoActual = document.getElementById(`pagina${paginaActual}`);
  contenidoActual.style.display = "none";
  if (paginaActual < 16) {
    paginaActual++;
  }
  const siguienteContenido = document.getElementById(`pagina${paginaActual}`);
  siguienteContenido.style.display = "block";
}

function retroceder() {
  const contenidoActual = document.getElementById(`pagina${paginaActual}`);
  contenidoActual.style.display = "none";
  if (paginaActual > 1) {
    paginaActual--;
  }
  const siguienteContenido = document.getElementById(`pagina${paginaActual}`);
  siguienteContenido.style.display = "block";
}

document.getElementById("siguiente").addEventListener("click", avanzar);
document.getElementById("anterior").addEventListener("click", retroceder);

//* Arrastrar imagenes
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var completar = document.getElementById(ev.target.id);
  completar.appendChild(draggedElement);

  // Desactivar el elemento y cambiar su clase
  
  
}
