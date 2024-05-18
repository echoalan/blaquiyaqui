let manoJugador = [];
let manoCrupier = [];

function jugarManoCrupier() {
  while (calcularPuntuacion(manoCrupier) < 17) {
    repartirCarta(manoCrupier);
  }
  mostrarMano(manoCrupier, 'cartasCrupier');
  document.getElementById('puntuacionCrupier').innerHTML = `Puntuación: ${calcularPuntuacion(manoCrupier)}`;
}

function iniciarJuego() {
  manoJugador = [];
  manoCrupier = [];
  repartirCarta(manoJugador);
  repartirCarta(manoJugador);
  repartirCarta(manoCrupier);
  mostrarMano(manoJugador, 'cartasJugador');
  mostrarMano(manoCrupier.slice(1), 'cartasCrupier');
  document.getElementById('puntuacionJugador').innerHTML = `Puntuación: ${calcularPuntuacion(manoJugador)}`;
  document.getElementById('puntuacionCrupier').innerHTML = `Puntuación: ?`;

  document.getElementById('pedirCarta').disabled = false;
  document.getElementById('plantarse').disabled = false;
  
}

document.getElementById('pedirCarta').addEventListener('click', function () {
  repartirCarta(manoJugador);
  mostrarMano(manoJugador, 'cartasJugador');
  document.getElementById('puntuacionJugador').innerHTML = `Puntuación: ${calcularPuntuacion(manoJugador)}`;
  if (calcularPuntuacion(manoJugador) > 21) {
    document.getElementById('puntuacionJugador').innerHTML += '<br>Perdiste papuuuuuuu';
    document.getElementById('pedirCarta').disabled = true;
    document.getElementById('plantarse').disabled = true;
  }
});

document.getElementById('plantarse').addEventListener('click', function () {
  jugarManoCrupier();
  let puntuacionJugador = calcularPuntuacion(manoJugador);
  let puntuacionCrupier = calcularPuntuacion(manoCrupier);
  if (puntuacionCrupier > 21 || puntuacionCrupier < puntuacionJugador) {
    document.getElementById('puntuacionCrupier').innerHTML += '<br>Ganaste';
  } else if (puntuacionCrupier === puntuacionJugador) {
    document.getElementById('puntuacionCrupier').innerHTML += '<br>Empate xd';
  } else {
    document.getElementById('puntuacionCrupier').innerHTML += '<br>Perdiste xd';
  }
  document.getElementById('pedirCarta').disabled = true;
  document.getElementById('plantarse').disabled = true;
})

function mostrarMano(mano, idElemento) {
  let cartasHtml = '';
  for (let carta of mano) {
    cartasHtml += `${carta.valor} de ${carta.palo}<br>`;
  }
  document.getElementById(idElemento).innerHTML = cartasHtml;
}

iniciarJuego();
