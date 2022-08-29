/* -----Ejercicio 1----- = No editar el HTML */

/* -----Ejercicio 2----- */

window.addEventListener("DOMContentLoaded", () => {
  console.log("Contenido del DOM cargado");

  /* -----Ejercicio 3----- */

  let origen = document.getElementById("origen");
  //    console.log(origen);

  origen.value =
    "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";
  //console.log(origen.value);

  /* -----Ejercicio 4----- */

  //------------------------------------------------------
  //Se agrega la class ".botones" a los distintos objetos
  //------------------------------------------------------

  let inputs = document.querySelectorAll("input");
  //    console.log(inputs);
  for (var i = 0; i < inputs.length; i++) inputs[i].className += " botones";

  let boton = document.querySelector("button");
  //    console.log(boton);
  boton.classList.add("botones");

  //-------------------------------------------------------------
  //Se genera un array con todos los objetos con clase ".botones"
  //-------------------------------------------------------------

  let arrayBotones = [...document.querySelectorAll(".botones")]; //Se utilíza Spread syntax (...)
  //console.log(arrayBotones);

  //-------------------------------------------------------------
  //Se crea la funcion focus para el textarea
  //-------------------------------------------------------------

  origen.onfocus = () => {
    let coleccionBotones = document.getElementsByClassName("botones");
    console.log(coleccionBotones);

    arrayBotones.forEach((i) => {
      i.disabled = false;
    });
  };

  /* -----Ejercicio 5----- */

  let destino = document.querySelector("#destino");
  destino.value = "";
//  console.log(origen.value);
//  console.log(destino.value);

  //---------------------------------
  //Creacion de variables de botones
  //---------------------------------

  let btnReemplazar = arrayBotones[0],
    btnAgregar = arrayBotones[1],
    btnAgregar5 = arrayBotones[2],
    btnAgregar10 = arrayBotones[3],
    btnAgregarN = arrayBotones[4],
    btnVaciar = arrayBotones[5];
  btnMayusculas = arrayBotones[6];
  btnMinusculas = arrayBotones[7];

  let nuevoP = document.createElement("p");
//  console.log(nuevoP);
  nuevoP.innerText = "";
  destino.appendChild(nuevoP);

  //console.log(btnReemplazar);

  //---------------------------
  //Boton reemplazar
  //---------------------------

  btnReemplazar.addEventListener("click", function reemplazar() {
    nuevoP.innerText = origen.value;
  });

  //---------------------------
  //Boton agregar
  //---------------------------

  btnAgregar.addEventListener("click", function agregar() {
    nuevoP.innerText = nuevoP.innerText + " " + origen.value;
  });

  //---------------------------
  //Boton agregar 5 veces
  //---------------------------

  btnAgregar5.addEventListener("click", function agregar5() {
    nuevoP.innerText = nuevoP.innerText + " " + (origen.value + " ").repeat(5);
  });

  //---------------------------
  //Boton agregar 10 veces
  //---------------------------

  btnAgregar10.addEventListener("click", function agregar10() {
    nuevoP.innerText = nuevoP.innerText + " " + (origen.value + " ").repeat(10);
  });

  //---------------------------
  //Boton agregar n veces
  //---------------------------

  btnAgregarN.addEventListener("click", function agregarN() {
    nuevoP.innerText = nuevoP.innerText +" " +(origen.value + " ").repeat(prompt("Determine la cantidad de repeticiones")
      );
  });

  /* -----Ejercicio 6----- */

  //---------------------------
  //Boton Vaciar
  //---------------------------

  btnVaciar.addEventListener("click", function vaciar() {
    nuevoP.innerText = "";
  });

  //-----------------------------
  //Boton convertir a mayusculas
  //-----------------------------

  btnMayusculas.addEventListener("click", function mayusculas() {
    nuevoP.innerText = nuevoP.innerText.toUpperCase();
  });

  //-----------------------------
  //Boton convertir a mayusculas
  //-----------------------------

  btnMinusculas.addEventListener("click", function minusculas() {
    nuevoP.innerText = nuevoP.innerText.toLowerCase();
  });

  /* -----Ejercicio 7----- */

/*   var liHTMLCollection = document.querySelectorAll('li')
  console.log(liHTMLCollection);
  for (let i = 0; i < liHTMLCollection.length; i++) {
    const element = array[i];
    i.innerText = "[OK] "
  } */

  let arrayLi = [...document.querySelectorAll("li")];
//  console.log(arrayLi);

  let coleccionLi = document.getElementsByTagName("li");
    console.log(coleccionLi);

  for (let i = 0; i < arrayLi.length; i++) {
    const element = arrayLi[i];
    element.innerText = "[OK] " + element.innerText
  }
});
