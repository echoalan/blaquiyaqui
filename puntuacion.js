function calcularPuntuacion(mano) {
  let puntuacion = 0;
  let tieneAs = false;
  for (let carta of mano) {
    if (carta.valor === 'A') {
      tieneAs = true;
    }
    if (carta.valor === 'J' || carta.valor === 'Q' || carta.valor === 'K') {
      puntuacion += 10;
    } else if (carta.valor !== 'A') {
      puntuacion += parseInt(carta.valor);
    }
  }
  if (tieneAs && puntuacion + 11 <= 21) {
    puntuacion += 11;
  } else if (tieneAs) {
    puntuacion += 1;
  }
  return puntuacion;
}
