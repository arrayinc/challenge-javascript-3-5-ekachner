"use strict";

function drawWidth(w){
    let x = "";
    let y = w-1;
    for(let i = 1; i < y; i++){
        while(x.length < i){
            x += "-";
        }       
    }
    console.log( `+${x}+`);
}


function drawHeight(w,h){
    let z = h-1;
    for(let j = 1; j < z; j++){
        let x = "";
        let y = w-1;
        for(let i = 1; i < y; i++){
            while(x.length < i){
                x += " ";
            }
        }
        console.log(`|${x}|`);
    }
}


function drawSquare(w,h){
    drawWidth(w);
    drawHeight(w,h);
    drawWidth(w);
}
(drawSquare(15,9));