import React from 'react';


function add(num1 , num2){
    return num1+num2;
}

function multiply(num1 ,num2){
    return num1*num2;
}

function subtracte(num1, num2){
    return num1-num2;
}

function divide(num1,num2){
    return num1/num2;
}


function Calculator(){
    return(
        <div>
            <h1>2+3 = {add(2,3)}</h1>
            <h1>6+3 = {multiply(2,3)}</h1>
            <h1>2+3 = {subtracte(2,3)}</h1>
            <h1>8+4 = {divide(8,4)}</h1>
        </div>
        )   
}

export default Calculator;
