var numero1 = parseInt(Math.random() * 10);
var numero2 = parseInt(Math.random() * 10);
var numero3 = parseInt(Math.random() * 10);
var numero4 = parseInt(Math.random() * 10);


// console.log(numero1)
// console.log(numero2)
// console.log(numero3)
// console.log(numero4)

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
        // el.classList.remove('number');
        // el.classList.remove('lugarErrado');
        // el.classList.remove('errado');
        el.className="acertou"
        // el.classList.add('acertou');
        console.log("if")
    } else if (num1 == numero2 || num1 == numero3 || num1 == numero4) {
      let el = document.getElementById("tentativa1Um");
        // el.classList.remove('number');
        // el.classList.remove('acertou');
        // el.classList.remove('errado');
        el.className="lugarErrado"

        // el.classList.add('lugarErrado');
        console.log("else if")
    } else {
      let el = document.getElementById("tentativa1Um");
        // el.classList.remove('number');
        // el.classList.remove('lugarErrado');
        // el.classList.remove('acertou');
        el.className="errado"

        // el.classList.add('errado');
        console.log("else")
    }

var num2 = document.getElementById("tentativa1Dois").value
    if (num2 == numero2) {
        let el = document.getElementById("tentativa1Dois");
        // el.classList.remove('number');
        // el.classList.add('acertou');
        el.className="acertou"
    } else if (num2 == numero1 || num2 == numero3 || num2 == numero4) {
        let el = document.getElementById("tentativa1Dois");
            // el.classList.remove('number');
            // el.classList.add('lugarErrado');
            el.className="lugarErrado"
    } else {
        let el = document.getElementById("tentativa1Dois");
        //  el.classList.remove('number');
        //  el.classList.add('errado');
            el.className="errado"
    }

var num3 = document.getElementById("tentativa1Tres").value
    if (num3 == numero3) {
        let el = document.getElementById("tentativa1Tres");
        // el.classList.remove('number');
        // el.classList.add('acertou');
        el.className="acertou"
    } else if (num3 == numero1 || num3 == numero2 || num3 == numero4) {
            let el = document.getElementById("tentativa1Tres");
            // el.classList.remove('number');
            // el.classList.add('lugarErrado');
            el.className="lugarErrado"
    } else {
        let el = document.getElementById("tentativa1Tres");
            // el.classList.remove('number');
            // el.classList.add('errado');
            el.className="errado"
    }

var num4 = document.getElementById("tentativa1Quatro").value
    if (num4 == numero4) {
        let el = document.getElementById("tentativa1Quatro");
        // el.classList.remove('number');
        // el.classList.add('acertou');
        el.className="acertou"
    } else if (num4 == numero1 || num4 == numero2 || num4 == numero3) {
        let el = document.getElementById("tentativa1Quatro");
            // el.classList.remove('number');
            // el.classList.add('lugarErrado');
            el.className="lugarErrado"
    } else {
        let el = document.getElementById("tentativa1Quatro");
            // el.classList.remove('number');
            // el.classList.add('errado');
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
        // el.classList.remove('number');
        // el.classList.add('errado');
        el.className = "resultado"
    }  
}

if (contador == 0) {
    resultado.innerHTML = "Errou o número era: " + numeroSecreto;
    let el = document.getElementById("resultado");
    // el.classList.remove('number');
    // el.classList.add('errado');
     el.className = "resultado"; 
}
}
