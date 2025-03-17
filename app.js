// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array almacenar nombres amigos
let amigos = [] 

//Función agregar nombre amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    
    if (inputAmigo == nombreAmigo) {
     alert('Ingrese un nombre');
     return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    console.log(amigos);
}





