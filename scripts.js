/*
let primero = document.getElementById("numero1").value
let segundo = document.getElementById("numero2").value
let final = document.getElementById("resultado")
*/




function sumar() {
    let primero = document.getElementById("numero1").value;
    let segundo = document.getElementById("numero2").value;
    let final = document.getElementById("resultado");

    let suma = +primero + +segundo;
    final.textContent = suma;
}

function restar(){
    let primero = document.getElementById("numero1").value;
    let segundo = document.getElementById("numero2").value;
    let final = document.getElementById("resultado");

    let resta = +primero - +segundo;
    final.textContent = resta;
}

function multiplicar(){
    let primero = document.getElementById("numero1").value;
    let segundo = document.getElementById("numero2").value;
    let final = document.getElementById("resultado");

    let multiple = +primero * +segundo;
    final.textContent = multiple;
}

function dividir(){
    let primero = document.getElementById("numero1").value;
    let segundo = document.getElementById("numero2").value;
    let final = document.getElementById("resultado");

    let divido = +primero / +segundo;
    final.textContent = divido;
}

function potenciar(){
    let primero = document.getElementById("numero1").value;
    let segundo = document.getElementById("numero2").value;
    let final = document.getElementById("resultado");

    let potencia = Math.pow(+primero,+segundo);
    final.textContent = potencia;
}

function raizar(){
    let primero = document.getElementById("numero1").value;    
    let final = document.getElementById("resultado");

    let raiz = Math.sqrt(primero);
    final.textContent = raiz;
}

function absolutear(){
    let primero = document.getElementById("numero1").value;    
    let final = document.getElementById("resultado");

    let absol = Math.abs(primero);
    final.textContent = absol;
}

function randomear(){
    let primero = document.getElementById("numero1").value;
    let segundo = document.getElementById("numero2").value;
    let final = document.getElementById("resultado");
    let bajo = Math.ceil(primero);
    let alto = Math.floor(segundo);

    let random = Math.floor(Math.random() * (alto - bajo) + bajo);
    final.textContent = random;
}

function redondear(){
   
    let final = document.getElementById("resultado");
    let redondeo = Math.round(final.textContent);
    final.textContent = redondeo;
}

function florear(){
    let final = document.getElementById("resultado");
    let flor = Math.floor(final.textContent);
    final.textContent = flor;
}

function ceilear(){
    let final = document.getElementById("resultado");
    let ceil = Math.ceil(final.textContent);
    final.textContent = ceil;
}
