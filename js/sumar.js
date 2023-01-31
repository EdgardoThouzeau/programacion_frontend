document.getElementById("sumare").addEventListener('click', function(){
let numeroA =  document.getElementById('numero1').value;
let numeroB = document.getElementById('numero2').value;

let respuesta = suma(parseInt(numeroA), parseInt(numeroB));
document.getElementById('resultado').innerHTML = respuesta;
console.log(respuesta);
document.getElementById('contenedorResultado').style.display='block';
})

function suma(a, b){
    return a+b;
}