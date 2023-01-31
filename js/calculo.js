console.log("estoy en javascript");
let numero1= 3;
const numero2=4;
let resultado=0;
resultado=numero1+numero2;
//muestro en contenido de numero1 en ventana emergente  con alert()
alert(numero1);

console.log("el resultado de la suma es:"+ resultado);

document.getElementById('boton').onclick=function() {
    console.log("capture el evento click");
    document.getElementById("remplazo").innerHTML="ya cambie el texto";
    }

document.getElementById('boton_color').addEventListener('click',function(){
    document.body.style.backgroundColor = "#1E920E";
})

document.getElementById('boton_default').addEventListener('click',function(){
    document.body.style.backgroundColor = "blue";
})

document.getElementById('boton_none').onclick=function(){
    document.getElementById("remplazo").style.display='none';
}

const coleccion=document.getElementsByClassName("clases");
for (let i=0; i<coleccion.length; i++){
    coleccion[i].style.backgroundColor="red";
}