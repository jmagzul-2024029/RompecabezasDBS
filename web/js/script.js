// rompecabeza de numeros
let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");

let tiempoRestante = 128;
let timerInterval = null;
let piezas = [];
let estado = [];

for (let i = 1; i <= 15; i++) {
    piezas.push(`img/pieza${i}.jpg`);
}
piezas.push(""); //celsdas vacías

//Función para mezclar piezas
function mezclar(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

//Dibujar el puzzle
function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        celda.classList.add("celda");

        if (valor == "") {
            celda.classList.add("vacio");
        } else {
            let img = document.createElement("img");
            img.src = valor;
            img.alt = `Pieza ${i}`;
            celda.appendChild(img);
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}

// Intentar mover pieza
function mover(indice) {
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);

    // verificar si es adyacente
    if ((Math.abs(col - colVacio) == 1 && fila === filaVacio) ||
            (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}

// verificar si ganó
function verificar() {
    let correcto = true;
    for (let i = 0; i < piezas.length; i++) {
        if (estado[i] !== piezas[i]) {
            correcto = false;
            break;
        }
    }
    if (correcto) {
        alert("🎉 ¡Felicidades! Completaste el rompecabezas.");
    }
}

//tiempo
function actualizarContador() {
    let contador = document.getElementById("contador");
    let minutos = Math.floor(tiempoRestante / 60);
    let segundos = tiempoRestante % 60;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    contador.textContent = `Tiempo ${minutos}:${segundos}`;
}

// tiempo
function iniciarTimer() {
    actualizarContador();
    timerInterval = setInterval(() => {
        tiempoRestante--;
        actualizarContador();

        if (tiempoRestante < 0) {
            clearInterval(timerInterval);
            alert("⏰ Se acabo el tiempo!! Has perdido.");
            reiniciar();
        }
    }, 1000);
}

//Reiniciar juego
function reiniciar() {
    estado = mezclar(piezas);
    mensaje.innerHTML = "";
    dibujar();
    clearInterval(timerInterval);
    tiempoRestante = 300;
    iniciarTimer();
}

//resolver automátiamente
function resolver() {
    estado = [...piezas];
    dibujar();
    clearInterval(timerInterval);
    alert("Buen intento 😉👌\n\
Aquí tienes el rompecabezas resuelto.");
}

// Iniciar al cargar
reiniciar();