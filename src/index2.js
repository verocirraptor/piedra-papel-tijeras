// VERSIÓN LAGARTO-SPOCK DE PIEDRA-PAPEL-TIJERA
const jugador1 = prompt("Escoge entre: Piedra / Papel / Tijeras / Lagarto / Spock");
const jugador2 = prompt("Escoge entre: Piedra / Papel / Tijeras / Lagarto / Spock");

if ((jugador1 === "Piedra" && jugador2 === "Piedra") ||
    (jugador1 === "Papel" && jugador2 === "Papel") ||
    (jugador1 === "Tijeras" && jugador2 === "Tijeras") ||
    (jugador1 === "Lagarto" && jugador2 === "Lagarto") ||
    (jugador1 === "Spock" && jugador2 === "Spock")) {
  alert("¡Empate!");
} else if ((jugador1 === "Piedra" && jugador2 === "Papel") ||
        (jugador1 === "Papel" && jugador2 === "Tijeras") ||
        (jugador1 === "Tijeras" && jugador2 === "Piedra") ||
        (jugador1 === "Papel" && jugador2 === "Lagarto") ||
        (jugador1 === "Spock" && jugador2 === "Lagarto") ||
        (jugador1 === "Piedra" && jugador2 === "Spock") ||
        (jugador1 === "Tijeras" && jugador2 === "Spock")) {
  alert("¡Gana jugador2!");
} else if ((jugador1 === "Piedra" && jugador2 === "Tijeras") ||
        (jugador1 === "Papel" && jugador2 === "Piedra") ||
        (jugador1 === "Tijeras" && jugador2 === "Papel") ||
        (jugador1 === "Lagarto" && jugador2 === "Papel") ||
        (jugador1 === "Lagarto" && jugador2 === "Spock") ||
        (jugador1 === "Spock" && jugador2 === "Piedra") ||
        (jugador1 === "Spock" && jugador2 === "Tijeras")) {
  alert("¡Gana jugador1!");
} else {
  alert("¡Error! ¡Inténtalo de nuevo!");
}
