'use strict'

const remote = require('remote');
const electron = remote.getCurrentWindow();

const mineArray = [];

window.onload = function() {
    bindEvents();
    generateMines();
}

function generateMines() {
    for (let i=1; i<=40; i++){
        mineArray[i] = Math.floor(Math.random() * 256);

        let mineElement = document.createElement("p");
        let mineText = document.createTextNode("X");
        mineElement.appendChild(mineText);

        let mineId = document.getElementById(`gameboard-${mineArray[i]}`);

        mineId.appendChild(mineElement);
    }
    console.log(mineArray);
}

function bindEvents() {
    const toolbarControls = document.querySelector('.toolbar');
    const gameboard = document.querySelector('.gameboard');

    toolbarControls.addEventListener(
        'click',
        toolbarHandler
    );

    toolbarControls.addEventListener(
        'mousedown',
        dragHandler
    );

    gameboard.addEventListener(
        'click',
        gameboardHandler
    );
}

function dragHandler(el){
    if(el.target.className != 'toolbar'){
        return;
    }
    el.srcElement.setAttribute('draggable', true);
}

function toolbarHandler(el) {
    switch (el.target.className) {
        case 'close':
            electron.close();
            break;
        case 'minimize':
            electron.minimize();
            break;
    }
}

function gameboardHandler(el) {

}
