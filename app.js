
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let = nombres = document.getElementById("amigo").value;
    if (nombres === "") {
        alert("por favor inserte un nombre");
    } else {
        if (amigos.includes(nombres)) {
            alert ("ingrese un nombre diferente");
        } else {
            amigos.push(nombres);
        }  
       
        mostrarAmigos();

    }
    document.getElementById("amigo").value= "";
}

function mostrarAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    for(i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = amigos[i];
        listaDeAmigos.appendChild(nuevoLi);
    }
}


function sortearAmigo() {
    if (amigos.length > 0) {
        let numeroAleatorio = Math.floor(Math.random()*amigos.length)
        let muestra = amigos[numeroAleatorio];
        let resultadoDeLista = document.getElementById("resultado");
    resultadoDeLista.innerHTML = muestra;
    }else {
        document.getElementById(resultado).innerHTML = "no hay resultados disponibles";
    }  
}



