// VERSIÓN HABITUAL DE PIEDRA-PAPEL-TIJERA
const jugador1 = prompt("Escoge entre: Piedra / Papel / Tijeras");
const jugador2 = prompt("Escoge entre: Piedra / Papel / Tijeras");

if ((jugador1 === "Piedra" && jugador2 === "Piedra") || (jugador1 === "Papel" && jugador2 === "Papel") || (jugador1 === "Tijeras" && jugador2 === "Tijeras")) {
  alert("¡Empate!");
} else if ((jugador1 === "Piedra" && jugador2 === "Papel") || (jugador1 === "Papel" && jugador2 === "Tijeras") || (jugador1 === "Tijeras" && jugador2 === "Piedra")) {
  alert("¡Gana jugador2!");
} else if ((jugador1 === "Piedra" && jugador2 === "Tijeras") || (jugador1 === "Papel" && jugador2 === "Piedra") || (jugador1 === "Tijeras" && jugador2 === "Papel")) {
  alert("¡Gana jugador1!");
} else {
  alert("¡Error! ¡Inténtalo de nuevo!");
}
