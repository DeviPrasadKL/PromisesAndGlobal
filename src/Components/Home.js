import React, { useState } from 'react';
import "./GlobalResources";
import "./Mixed";

export default function Home() {
  let data = global.dataBase;
  const [bool, setbool] = useState(true);

  // let mixed = global.mixed;

  // let newData = {
  //   "id": `${global.getId()}`,
  //   "name": "Raj three"
  // }
  // data.push(newData);
  // console.log(data[2].id);

  // let change = ()=>{
  //   if(bool){
  //     window.heading = "Home Heading";
  //     setbool(false);
  //   }else{
  //     window.heading = "Home Heading 2";
  //     setbool(true);
  //   }
  //   console.log(window.heading);
  // }

  return (
    <div className='Home'>
      <h1>Id = {global.getId()}</h1>
      <h2>{window.head}</h2>
      {/* <h1>Mixed = {mixed}</h1> */}
      {/* <h1>{global.change(`${data[0].name}`)}</h1> */}
      {
        data.map((value)=>{
          return (
            <h2>{global.change(value.name)}</h2>
          )
        })
      }
      <button style= {{backgroundColor : "Yellow" }} onClick={window.changeHeading} >click</button>
    </div>
  );
}
