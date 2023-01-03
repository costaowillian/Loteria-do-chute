var numero1 = parseInt(Math.random() * 10);
var numero2 = parseInt(Math.random() * 10);
var numero3 = parseInt(Math.random() * 10);
var numero4 = parseInt(Math.random() * 10);

var nm1 = numero1.toString()
var nm2 = numero2.toString()
var nm3 = numero3.toString()
var nm4 = numero4.toString()

var numeroSecreto = nm1 + nm2 +nm3 + nm4

var contador = 4;

function Chutar() {
var num1 = document.getElementById("tentativa1Um").value
    if (num1 == numero1) {
        let el = document.getElementById("tentativa1Um");
        el.className="acertou"
    } else if (num1 == numero2 || num1 == numero3 || num1 == numero4) {
      let el = document.getElementById("tentativa1Um");
        el.className="lugarErrado"
        console.log("else if")
    } else {
      let el = document.getElementById("tentativa1Um");
        el.className="errado"
        console.log("else")
    }

var num2 = document.getElementById("tentativa1Dois").value
    if (num2 == numero2) {
        let el = document.getElementById("tentativa1Dois");
        el.className="acertou"
    } else if (num2 == numero1 || num2 == numero3 || num2 == numero4) {
        let el = document.getElementById("tentativa1Dois");
            el.className="lugarErrado"
    } else {
        let el = document.getElementById("tentativa1Dois");
            el.className="errado"
    }

var num3 = document.getElementById("tentativa1Tres").value
    if (num3 == numero3) {
        let el = document.getElementById("tentativa1Tres");
        el.className="acertou"
    } else if (num3 == numero1 || num3 == numero2 || num3 == numero4) {
            let el = document.getElementById("tentativa1Tres");
            el.className="lugarErrado"
    } else {
        let el = document.getElementById("tentativa1Tres");
            el.className="errado"
    }

var num4 = document.getElementById("tentativa1Quatro").value
    if (num4 == numero4) {
        let el = document.getElementById("tentativa1Quatro");
        el.className="acertou"
    } else if (num4 == numero1 || num4 == numero2 || num4 == numero3) {
        let el = document.getElementById("tentativa1Quatro");
            el.className="lugarErrado"
    } else {
        let el = document.getElementById("tentativa1Quatro");
            el.className="errado"
    }


var resultado = document.getElementById("textoResultado");
var numeroChutado = num1 + num2 + num3 + num4;


while (--contador > 0) {
    console.log(numeroChutado)
    console.log(contador)

    if (numeroChutado != numeroSecreto){
        alert("você ainda tem " + contador + " chances!")
        break;
    } else {
        document.getElementById("textoResultado")
        resultado.innerHTML = "Parabéns você acertou!";
       let el = document.getElementById("resultado");
        el.className = "resultado"
    }  
}

if (contador == 0) {
    resultado.innerHTML = "Errou o número era: " + numeroSecreto;
    let el = document.getElementById("resultado");
     el.className = "resultado"; 
}
}
