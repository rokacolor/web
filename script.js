// Frases inspiradoras para el carrusel
const frases = [
  "Yo soy un Hombre Libre, Amoroso y Confiado.",
  "Hoy Abrazo la vida con gratitud y confianza.",
  "El amor y la creatividad fluyen en mí.",
  "Cada día es mi oportunidad de brillar.",
  "Soy transformador de mis sueños a realidad.",
  "No necesito un cargo o título para ser el líder que soy.",
  "“El cambio comienza conmigo. Soy la causa, no el efecto.”",
"No espero a que el mundo cambie. Soy el cambio que el mundo requiere.",
  "No trabajo por un cheque, Yo hoy trabajo por un legado.”,
  "Mis miedos son solo una señal de que estoy creciendo.",
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
