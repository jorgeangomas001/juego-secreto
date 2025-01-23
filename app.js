// El principal objetivo de este desafío es fortalecer tus habilidades en
// lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creando la lista de amigos, y la variable amigos
listaAmigos = [];
let amigos = document.getElementById("amigo");
amigos.value = "";

//funcion para agregar amigos a la lista, y mostrarlos en pantalla
function agregarAmigo() {
  //verificar si el input esta vacio, para para mostrar un alerta
  amigos.value == ""
    ? alert("ingrese un nombre por a favor")
    : listaAmigos.push(amigos.value);

  //mostrar lista de amigo en pantalla
  document.querySelector(".name-list").innerHTML = `${listaAmigos
    .map((amigo) => `<li>${amigo}</li>`)
    .join("")}`;
  amigos.value = "";
}

//funcion para sortear un amigo de la lista
function sortearAmigo() {
  //variable para optener un numero random, y seleccionar un amigo de la lista
  let ganador = Math.floor(Math.random() * listaAmigos.length);

  //verificar si la lista esta vacio, o tiene elementos, para mostrar el ganador
  listaAmigos.length == 0
    ? alert("Ingrese un amigo por favor")
    : (document.querySelector(
        ".name-list"
      ).innerHTML = `${listaAmigos[ganador]}`);
}
