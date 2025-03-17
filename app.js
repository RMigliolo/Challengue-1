// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array almacenar nombres amigos
let amigos = [] 

//Función agregar nombre amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    
    if (inputAmigo.value === '') {
     alert('Ingrese un nombre');
     return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    listadoAmigos();
    console.log(amigos);
}

function listadoAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos [i];
        listaAmigos.appendChild(item);
    }
}



