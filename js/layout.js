'use strict'

window.onload = function() {

let gb = document.getElementById('gb');

for (let i=1; i<=16; i++){
    let newRow = document.createElement('div');
    newRow.className = `row-${i}`;

    for (let k=1; k<=16; k++){
        let newBtn = document.createElement('div');
        newBtn.className = 'btn-hide';

        let newBtnBot = document.createElement('div');
        newBtnBot.className = 'btn-show';

        newBtn.appendChild(newBtnBot);
        newRow.appendChild(newBtn);
    }
    console.log(newRow);
    //gb.appendChild(newRow);
}

document.body.appendChild(gb);
}
