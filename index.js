"use strict"
//funcion
function move (button){
    let name = document.querySelector(button);
    let body = document.querySelector("body");
    //evento click
    name.addEventListener("click", ()=>{
        /* let position = name.getBoundingClientRect(); */
        //comprueva si la clase es la correcta
        if( name.classList[1] == 'right')
        {
            body.style.backgroundColor = '#DAE3ED'
            name.setAttribute("data-class", "right");
            name.classList.remove('right');
            name.classList.add('left');
        }else{
            body.style.backgroundColor = '#ECE8DA'
            name.setAttribute("data-class", "left");
            name.classList.remove('left');
            name.classList.add('right');
        }
    });
}
//llamar a las funciones
move('.button');