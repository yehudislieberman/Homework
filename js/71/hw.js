(function (){
    'use strict';

let buttonNum=1;

function newButton (){
    const onButton = document.createElement('button');
    onButton.innerText = `${++buttonNum}`;
    onButton.addEventListener('click', newButton);
    document.body.appendChild(onButton);
}

const button= document.querySelector('#button');
button.addEventListener('click', newButton);

}());