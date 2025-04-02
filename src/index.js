// VERSIÓN HABITUAL DE PIEDRA-PAPEL-TIJERA
/* const jugador1 = prompt("Escoge entre: Piedra / Papel / Tijeras");
const jugador2 = prompt("Escoge entre: Piedra / Papel / Tijeras");

if ((jugador1 === "Piedra" && jugador2 === "Piedra") ||
    (jugador1 === "Papel" && jugador2 === "Papel") ||
    (jugador1 === "Tijeras" && jugador2 === "Tijeras")) {
  alert("¡Empate!");
} else if ((jugador1 === "Piedra" && jugador2 === "Papel") ||
        (jugador1 === "Papel" && jugador2 === "Tijeras") ||
        (jugador1 === "Tijeras" && jugador2 === "Piedra")) {
  alert("¡Gana jugador2!");
} else if ((jugador1 === "Piedra" && jugador2 === "Tijeras") ||
        (jugador1 === "Papel" && jugador2 === "Piedra") ||
        (jugador1 === "Tijeras" && jugador2 === "Papel")) {
  alert("¡Gana jugador1!");
} else {
  alert("¡Error! ¡Inténtalo de nuevo!");
} */

/* function piedraPapelTijera() {
  const jugador1 = prompt("Escoge entre: Piedra / Papel / Tijeras");
  const jugador2 = prompt("Escoge entre: Piedra / Papel / Tijeras");

  if ((jugador1 === "Piedra" && jugador2 === "Piedra") ||
    (jugador1 === "Papel" && jugador2 === "Papel") ||
    (jugador1 === "Tijeras" && jugador2 === "Tijeras")) {
    return "¡Empate!";
  } else if ((jugador1 === "Piedra" && jugador2 === "Papel") ||
        (jugador1 === "Papel" && jugador2 === "Tijeras") ||
        (jugador1 === "Tijeras" && jugador2 === "Piedra")) {
    return "¡Gana jugador2!";
  } else if ((jugador1 === "Piedra" && jugador2 === "Tijeras") ||
        (jugador1 === "Papel" && jugador2 === "Piedra") ||
        (jugador1 === "Tijeras" && jugador2 === "Papel")) {
    return "¡Gana jugador1!";
  } else {
    return "¡Error! ¡Inténtalo de nuevo!";
  }
}

const resultado = piedraPapelTijera();
alert(resultado); */

function quienGana(jugador1, jugador2) {
  if (
    (jugador1 === "Piedra" && jugador2 === "Piedra") ||
    (jugador1 === "Papel" && jugador2 === "Papel") ||
    (jugador1 === "Tijeras" && jugador2 === "Tijeras")
  ) {
    return 0;
  } else if (
    (jugador1 === "Piedra" && jugador2 === "Papel") ||
    (jugador1 === "Papel" && jugador2 === "Tijeras") ||
    (jugador1 === "Tijeras" && jugador2 === "Piedra")
  ) {
    return 2;
  } else if (
    (jugador1 === "Piedra" && jugador2 === "Tijeras") ||
    (jugador1 === "Papel" && jugador2 === "Piedra") ||
    (jugador1 === "Tijeras" && jugador2 === "Papel")
  ) {
    return 1;
  } else {
    return "¡Error! ¡Inténtalo de nuevo!";
  }
}

function piedraPapelTijera() {
  const jugador1 = prompt("Escoge entre: Piedra / Papel / Tijeras");
  const jugador2 = prompt("Escoge entre: Piedra / Papel / Tijeras");

  if (quienGana(jugador1, jugador2) === 0) {
    return "¡Empate!";
  }

  if (quienGana(jugador1, jugador2) === 1) {
    return "¡Gana jugador1!";
  }

  if (quienGana(jugador1, jugador2) === 2) {
    return "¡Gana jugador2!";
  }
}

const resultado = piedraPapelTijera();
alert(resultado);
