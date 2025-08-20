// Frases inspiradoras para el carrusel
const frases = [
  "Yo soy un Hombre Libre, Amoroso y Confiado.",
  "Abrazo la vida con gratitud y confianza.",
  "El amor y la creatividad fluyen en mí.",
  "Cada día es una nueva oportunidad para brillar.",
  "Soy capaz de transformar mis ideas en realidad."
];

let index = 0;
const fraseElement = document.getElementById("frase");

function mostrarFrase() {
  // Desaparecer
  fraseElement.classList.remove("visible");

  setTimeout(() => {
    // Cambiar texto
    fraseElement.textContent = frases[index];
    // Aparecer
    fraseElement.classList.add("visible");

    // Siguiente índice
    index = (index + 1) % frases.length;
  }, 1500); // tiempo de fade-out
}

// Mostrar primera frase
mostrarFrase();

// Cambiar cada 5 segundos
setInterval(mostrarFrase, 5000);
