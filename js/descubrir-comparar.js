function descubrir() {
  var descubiertas;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
}

function comparar(comparartarjetas){

  if (comparartarjetas[0].dataset.valor === comparartarjetas[1].dataset.valor){
      acierto(comparartarjetas);
  }
  else{
      error(comparartarjetas);
  }

}
