// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array almacenar nombres amigos
let amigos = [] 

//Función agregar nombre amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    //Validación de campo vacío en input
    if (inputAmigo.value === '') {
     alert('Ingrese un nombre');
     return; //Detiene ejecución de la función
    }
    //Validación de nombre repetido
    if(amigos.includes(nombreAmigo)) {
        alert('El nombre del amigo ya fue ingresado');
        return;
    }
    //Seguimiento de los nombres ingresados, limpieza de input y focus (cursor)
    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    listadoAmigos();
    console.log(amigos);
}
//Función crear el listado de amigos
function listadoAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos [i];
        listaAmigos.appendChild(item);
    }
}
//Función sorteo de amigo
function sortearAmigo(){
    if(amigos.length === 0){ //Validación del array esta vacío
        alert('No hay amigos para sortear');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
//Función limpiar lista
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}