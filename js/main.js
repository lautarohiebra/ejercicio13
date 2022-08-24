/* Ejercicio 1 = No editar el HTML */
/* Ejercicio 2 */

window.addEventListener('DOMContentLoaded', () => {
    console.log('Contenido del DOM cargado');


    /* Ejercicio 3 */

    const origen = document.getElementById("origen")
//    console.log(origen);

    origen.value="<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"

    /* Ejercicio 4 */
//------------------------------------------------------
//Se agrega la class ".botones" a los distintos objetos
//------------------------------------------------------

    let inputs = document.querySelectorAll("input");
//    console.log(inputs);
        for(var i = 0; i < inputs.length; i++)
        inputs[i].className += " botones";
    
    let boton = document.querySelector("button");
//    console.log(boton);
        boton.classList.add('botones');
    
//    console.log(document.querySelectorAll('.botones'));

//-------------------------------------------------------------
//Se genera un array con todos los objetos con clase ".botones"
//-------------------------------------------------------------

let arrayBotones = [...document.querySelectorAll('.botones')]; //Se utilíza Spread syntax (...)
//console.log(arrayBotones);


//-------------------------------------------------------------
//Se crea la funcion focus para el textarea
//-------------------------------------------------------------


    origen.onfocus = ()=>{

        let coleccionBotones = document.getElementsByClassName("botones");
        console.log(coleccionBotones);

        arrayBotones.forEach(i => {
            i.disabled = false
        });

    }
});


