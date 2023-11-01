'use strict';

const start= document.querySelector('#button');
const colors = ['green', 'blue','purple', 'red', 'orange', 'yellow' ];
let index= 0;
let interval;

start.addEventListener('click', startstop);

function startstop(){
    if (! interval){
        startChanging();
    }
    else{
        stopChanging();
    }
}

function startChanging(){
    start.innerText = 'Stop';
    interval = setInterval(() =>{
    document.body.style.color=colors[index++];
    if(index >= colors.length){
        index=0;
    }
    document.body.style.backgroundColor=colors[index];
    
},1500);
}

function stopChanging(){
    start.innerText = 'Start';
    clearInterval(interval);
    }



