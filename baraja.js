const palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let baraja = crearBaraja();

function crearBaraja() {
  let baraja = [];
  for (let palo of palos) {
    for (let valor of valores) {
      baraja.push({ valor, palo });
    }
  }
  return baraja;
}

function barajar() {
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
}

function repartirCarta(mano) {
  mano.push(baraja.pop());
}


