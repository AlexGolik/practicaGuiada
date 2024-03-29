'use strict';
import { checkAvg } from "./validate.js";
const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardseProfesores');
const students = [];
const teachers = [];

const paintCard = (typ)=>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateStudent').content;
    const templateTeach = document.querySelector('#templateTeach').content;

    if(typ === 'ESTUDIANTE'){
        for(let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML =`PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    }else if(typ === 'PROFESOR'){
            for(let i of teachers){
                const cloneTemp = templateTeach.cloneNode(true);
                cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>profesor</i>";
                cloneTemp.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${i.nomApe.toUpperCase()} PROFESIÓN: ${i.prof.toUpperCase()}`;
                cloneTemp.querySelector('.text-edad').innerHTML =`EDAD: ${i.age}`;
                fragment.appendChild(cloneTemp);
            }
        }
    cardE.appendChild(fragment);
    cardP.appendChild(fragment);
};

const addStudent = (name, lastNme, avg)=>{
    //Objeto literal de JS
    let student ={
        nom: name,
        ape: lastNme,
        prom: avg

    }
    students.push(student);
    modalArlert2('Se agrego un estudiante');
}
const addTeacher = (name, lastNme, avg)=>{
    //Objeto literal de JS
    let teacher ={
        nomApe: name,
        prof: lastNme,
        age: avg

    }
    teachers.push(teacher);
    modalArlert2('Se agrego un profesor');
}

const modalArlert = (cad)=>{
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = './img/cruz.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML =`<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }
}

const modalArlert2 = (cad)=>{
    const alerta2 = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = './img/cruz.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta2.setAttribute("id","alerta2");
    alerta2.setAttribute("class","alerta2");
    texto.innerHTML =`<strong>${cad}</strong>`;
    alerta2.appendChild(img);
    alerta2.appendChild(texto);
    document.body.appendChild(alerta2);
    img.onclick = function(){
        document.getElementById("alerta2").remove();
    }
}

export {paintCard, addStudent,modalArlert, addTeacher,modalArlert2}