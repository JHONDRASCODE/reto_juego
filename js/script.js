// Inicialización de variables
let tarjetasDestapadas = 0;
let tarjetasDestapadasAnteriores = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

// Apuntado a documento HTML
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");

//generacion de numeros aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => Math.random() - 0.5);
console.log(numeros);

//Primera Funcion
function destapar(id) {
  tarjetasDestapadas++;
  console.log(tarjetasDestapadas);
  if (tarjetasDestapadas == 1) {
    //Mostrar promer numero
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    //desabilitar el primer boton
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    // mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    // Deshabilitr segundo boton
    tarjeta2.disabled = true;

    //incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    //comparar numeros y actualizar aciertos
    if (tarjetasDestapadasAnteriores === 0) {
      tarjetasDestapadasAnteriores = tarjetasDestapadas;
    } else {
      if (primerResultado === segundoResultado) {
        // encerrra contador tarjetas destapadas
        tarjetasDestapadas = 0;

        //Aumentar aciertos
        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

        if (aciertos === 8) {
          mostrarAciertos.innerHTML = `Aciertos: ${aciertos} p`;
        }
      } else {
        // mostrar momentanament valores y volver a tapar
        setTimeout(() => {
          tarjeta1.innerHTML = "";
          tarjeta2.innerHTML = "";
          tarjeta1.disabled = false;
          tarjeta2.disabled = false;
          tarjetasDestapadas = 0;
          tarjetasDestapadasAnteriores = 0;
        }, 2000);
      }
    }
  }
}