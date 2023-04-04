import React, { useState } from 'react';
global.mixed = "";

export default function Mixed() {
    // let global = global.mixed;

const [change, setChange] = useState(true);
const [heading, setheading] = useState("Default Heading");
window.head = heading;

window.changeHeading = ()=>{
    if(change){
        setheading("True heading");
        setChange(false);
    }else{
        setheading("False heading");
        setChange(true);
    }
}

// let changeValue = ()=>{
//     if(change){
//         global.mixed = "Now True";
//         setChange(false);
//         window.heading = "False Heading";
//     }else{
//         global.mixed = "Now False";
//         setChange(true);
//         window.heading = "True Heading";
//     }
// }

  return (
    <div className='Mixed'>
        <h1>Heading = {heading}</h1>
      <button style= {{backgroundColor : "Red" }} onClick={window.changeHeading} >click</button>
    </div>
  );
}
