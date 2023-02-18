'use strict';
import { validateString, vAvg, checkAvg } from "./validate.js";
import { paintCard, addStudent, modalArlert,addTeacher } from "./paint.js";

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const option = document.getElementById('opcion')

/*
Genrar eventos

1.Colocando el metodo(evento=) en el a onclick, onmuseover, onmuseout de la etiquera

2.Propiedad 

*/

btnAgregar.onclick = function () {
    //console.log('evento propiedad');

    const name = document.getElementById('nombre').value;
    const lastname = document.getElementById('apellido').value;
    const avg = document.getElementById('promedio').value;
    const nameApe = document.getElementById('nombre').value;
    const prof = document.getElementById('apellido').value;
    const age = document.getElementById('promedio').value;
    const op = document.getElementById('opcion').value;


    //console.log('${name} ${lastname} ${avg} ${option}');
    if (op === 'estudiante') {
        if (validateString(name) && validateString(lastname) && opcion != 0) {
            if ((!isNaN(avg)) && (vAvg(avg))) {
                addStudent(name, lastname, avg)
                document.getElementById('nombre').value = "";
                document.getElementById('apellido').value = "";
                document.querySelector('#promedio').value = "";
            } else {
                document.querySelector('#promedio').value = "";
                modalArlert("Promedio Inválido");
            }
        } else {
            modalArlert("Datos Inválidos, revisar los datos");
        }
        formulario.reset();
    } else if (op === 'profesor') {
        if (validateString(nameApe) && validateString(prof) && opcion != 0) {
            if ((!isNaN(age))) {
                addTeacher(name, lastname, avg)
                document.getElementById('nombre').value = "";
                document.getElementById('apellido').value = "";
                document.querySelector('#promedio').value = "";
            }
            } else {
                modalArlert("Datos invalidos");
            }
            formulario.reset();
        }
    }
    option.onchange = function(){
        let op = document.getElementById('opcion').value;
        if(op === 'profesor'){
                document.getElementById('text1').innerHTML="Nombres y Apellidos:";
                document.getElementById('text2').innerHTML="Profesión";
                document.getElementById('text3').innerHTML="Edad:";
        } else if(op === 'estudiante'){
            document.getElementById('text1').innerHTML="Nombres:";
                document.getElementById('text2').innerHTML="Apellidos";
                document.getElementById('text3').innerHTML="Promedio:";
        }
    }

    btnMostrar.addEventListener("click", function () {
        const op = document.getElementById('opcion').value;
        if (op === 'estudiante') {
            paintCard("ESTUDIANTE");
        } else if (op === 'profesor') {
            paintCard("PROFESOR");
        }
    });