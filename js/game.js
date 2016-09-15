'use strict'

const remote = require('remote');
const electron = remote.getCurrentWindow();

const mineArray = [];

window.onload = function() {
    bindEvents();
    generateMines();
}

function generateMines() {
    while (mineArray.length < 40){
        const numGen = Math.floor(Math.random() * 255 + 1);
        let exist = false;
        for (let i = 0; i < mineArray.length; i++){
            if (mineArray[i]==numGen){
                exist = true;
                break;
            }
        }
        if (!exist){
            mineArray.push(numGen);

            let mineElement = document.createElement("span");
            mineElement.setAttribute("class", "glyphicon glyphicon-remove");
            mineElement.setAttribute("aria-hidden", "true");

            let mineId = document.getElementById(`gameboard-${numGen}`);

            mineId.appendChild(mineElement);
        }
    }

    generateNumbers();
}

function generateNumbers() {
    for (let k = 1; k >= 256; k++) {
        const observedElement = document.getElementById(`gameboard-${k}`);
        console.log(observedElement);

        /*
        if (k == 1) {
            // top left corner
        }
        elseif (k == 16) {
            // top right corner
        }
        elseif (k == 241) {
            // bottom left corner
        }
        elseif (k == 256) {
            // bottom right corner
        }
        elseif (1 <= k <= 16) {
            // top row
        }
        elseif () {
            // bottom row
        }
        elseif () {
            // left column
        }
        elseif () {
            // right column
        }
        else {
            // normal cell with 8 adjacent cells
        }
        */
    }
}

function bindEvents() {
    const toolbarControls = document.querySelector('.toolbar');
    const gameboard = document.querySelector('.gameboard');
    const tile = document.querySelector('.btn');

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

    gameboard.addEventListener(
        'click',
        startTimer
    );

    gameboard.addEventListener(
        'contextmenu',
        flagHandler
    );

    tile.addEventListener(
        'click',
        showTile
    );
}

function dragHandler(el) {
    if(el.target.className != 'toolbar') {
        return;
    }
    el.srcElement.setAttribute('draggable', true);
}

function toolbarHandler(el) {
    switch (el.target.className) {
        case 'closeBtn':
            electron.close();
            break;
        case 'minimizeBtn':
            electron.minimize();
            break;
    }
}

function gameboardHandler(el) {

}

function startTimer() {
    const gameboard = document.querySelector('.gameboard');

    gameboard.removeEventListener(
        'click',
        startTimer
    );

    let sec = 996;
    const timer = document.getElementById('time');
    setInterval(setTime, 1000);

    function setTime() {
        if (sec < 999) {
            timer.innerHTML = `${++sec}`;
        }
        else {
            clearInterval();
            const timerId = document.getElementById('timerId');
            timerId.setAttribute("style", "background-color: rgb(247, 43, 43)");
        }
    }
}

function flagHandler(el) {
    console.log('right click');
    /*
    if (already flag) {
        remove flag
    }
    else {
        add flag
    }
    */
}

function showTile() {

}
