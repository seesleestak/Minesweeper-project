'use strict'

let flexContain = document.createElement('div');
flexContain.setAttribute('class', 'gameboard');

for(let i=1; i<=256; i++) {
    let newBtn = document.createElement('div');
    newBtn.className = 'btn';

    newBtn.setAttribute("id", `gameboard-${i}`);
    let btnArray = [i];

    flexContain.appendChild(newBtn);
}


document.getElementById('vc').appendChild(flexContain);
