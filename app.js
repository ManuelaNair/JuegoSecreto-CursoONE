let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${(intentos === 1)? 'intento' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    }
        else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;

    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles!');
    } else {
            //Si el numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'juego del número secreto');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio 
    //resetear el numero de intentos
    condicionesIniciales();
    //deshabilitar el botón de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

