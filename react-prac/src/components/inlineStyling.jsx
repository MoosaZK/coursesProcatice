import React from 'react';

const date = new Date().getHours();
let greeting = "";
function setgreeting (){
  if(date >= 0 && date < 12){
    greeting = "Good Morning";
  }
    
  else if( date >= 12 && date <= 18)
    greeting = "Good Afternoon";
  else if (date >= 18 && date <=24)
    greeting ="Goood Evening!";
}

setgreeting();

const custom = {
  color : "BLue",
}
function HourGreating(){
    return(
        <h1 style={custom}> {date} {greeting} </h1>
    )
}

export default HourGreating;