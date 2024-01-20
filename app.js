let btnIntentar = document.getElementById('intentar');
let btnReiniciar = document.getElementById('reiniciar');


let intentos = 0;
let numeroSecreto = 0;
//lista de numeros sorteados
let listaDeNumeroSorteados = [];
let numeroMaximo = 25//parseInt(prompt(`Ingrese el numero maximo de jugadas que desea hacer.`));

//funcion para crear elemento html
const asignarTextoElemento = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//generar Numero secreto
const generarNumeroSecreto = () => {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  //Si ya sorteamos todos los numeros.
  if (listaDeNumeroSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', `YA se soltearon todos los numeros posibles 🤷🏽‍♂️`);
  } else {

    //Si el numero generado esta en la lista ara una funcion y si no ara otra
    if (listaDeNumeroSorteados.includes(numeroGenerado)) {
      //se llama la funcion asi misma para que vuelva a crear otro numero en caso de que el numero sea repetido cuando lo entregue.

      return generarNumeroSecreto();
    } else {
      listaDeNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}



//===========================
function condicionesIniciales() {
  asignarTextoElemento('h1', `Juego del numero secreto     <img src="./img/ia.png" alt="Una persona mirando a la izquierda" class="container__imagen"/>`);
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

//Funcion reiniciarJuego
function reiniciarJuego() {
  //Limpiar caja.
  limpiarCaja();
  //Indicar mensaje de intervalo de numero.
  //Generar el numero aleatorio.
  //Inicializar el numero de intentos
  condicionesIniciales();
  //Desabilitar el boton del nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales()



const verificarIntento = () => {
  let numeroUsuario = document.getElementById('valorUsuario').value
  numeroUsuario = parseInt(numeroUsuario)

  console.log(intentos)
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste 🤯🥳! el numero  en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'} `);

    //Para desabilitar el disabled del boton reiniciar llamado nuevo juego cada vez que acerte el numero.
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El numero secreto es menol 🤪')
    } else {
      asignarTextoElemento('p', 'El numero secreto es mayor 😎')
    }
  }
  intentos++
  limpiarCaja()
  return;
}
//Limpiar input o caja
function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}



// Asignar la función al  evento onclick del los botónes
btnIntentar.onclick = verificarIntento;
btnReiniciar.onclick = reiniciarJuego;