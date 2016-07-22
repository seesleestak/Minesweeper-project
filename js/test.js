'use strict'

let flexContain = document.createElement('div');
flexContain.setAttribute('class', 'gameboard');

for(let i=1; i<=256; i++) {
    let newBtn = document.createElement('div');
    newBtn.className = 'btn-hide';

    let newBtnBot = document.createElement('div');
    newBtnBot.className = 'btn-show';
    newBtnBot.setAttribute("id", `gameboard-${i}`);
    let btnArray = [i];
    newBtn.appendChild(newBtnBot);
    
    flexContain.appendChild(newBtn);
}


document.getElementById('vc').appendChild(flexContain);
