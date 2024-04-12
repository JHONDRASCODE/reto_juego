// Inicializacion de variables 
let tarjetasDestapadas = 0;
let tarjeta1 = null; 
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return  Math.random(-0.5 )});
console.log(numeros);

//Primera Funcion
function destapar(id){
 tarjetasDestapadas ++;
 console.log(targetasDestapadas);b
 if(targetasDestapadas == 1){
    //Mostrar promer numero
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;
//desabilitar el primer boton

tarjeta1.disabled = true;
 }else if(trajetasDestapadas ==2)
 // mostrar segundo numero
 trajeta2 = document.getElementById(id);
 segundoResultado= numeros[id]
 tarjeta2.innerHTML = segundoResultado;

 // Deshabilitr segundo boton
 trajeta2.disabled = true;

 //incrementar movimientos
 movimientos++;
}