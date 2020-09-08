const botonNumero = document.getElementsByName('numero');
const botonOperacion = document.getElementsByName('operacion');
const botonIgual = document.getElementsByName('igual')[0];
const botonBorrar = document.getElementsByName('borrar')[0];

let resultado = document.getElementById('resultado');
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

botonNumero.forEach(function (boton) {
    boton.addEventListener('click', () => {
        agregarNumero(boton.innerText);
    });
});

botonOperacion.forEach(function (boton) {
    boton.addEventListener('click', () => {
        seleccionarOperacion(boton.innerText);
    });
});

botonIgual.addEventListener('click', () => {
    calcular();
    actualizarDisplay();
});

botonBorrar.addEventListener('click', () => {
    clear();
    actualizarDisplay();
});

function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay() {
    resultado.value = operacionActual;
}

function calcular() {
    let calculo;

    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || (isNaN(actual))) return;

    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

function seleccionarOperacion(op) {
    if (operacionActual === '') return;

    if (operacionAnterior != '') {
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function clear() {
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}