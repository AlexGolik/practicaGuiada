'use strict';
import { validateString, vAvg, checkAvg} from "./validate.js";
import {paintCard, addStudent, modalArlert} from "./paint.js";

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/*
Genrar eventos

1.Colocando el metodo(evento=) en el a onclick, onmuseover, onmuseout de la etiquera

2.Propiedad 

*/

btnAgregar.onclick = function(){
    //console.log('evento propiedad');

    const name = document.getElementById('nombre').value;
    const lastname = document.getElementById('apellido').value;
    const avg = document.getElementById('promedio').value;
    const op = document.getElementById('opcion').value;


    //console.log('${name} ${lastname} ${avg} ${option}');

    if(validateString(name) && validateString(lastname)&& opcion !=0){
        if((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastname,avg);
        }else{
            document.querySelector('#promedio').value="";
            modalArlert("Promedio Inválido");
            }
    }else{
        modalArlert("Datos Inválidos, revisar los datos");
    }
    formulario.reset();
}



    btnMostrar.addEventListener("click", function(){
        paintCard("ESTUDIANTE");
    });

    