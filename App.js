/*import App2 from './app2.js';
function App(){
let handleClick= () =>
{
  console.Console.log("click");
} ; 
    let msg="new tab app.js";
  return (
    <div>
      <h2>App2</h2>
      <App2 message={msg} />
      <button onClick={handleClick}></button>
 
    </div>
  );
}
export default App */

/*import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton /><br></br>
      <br></br>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  } */

  /*import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} /><br>
      </br>
      <br></br>
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}*/

import { Student } from "./Student";

import React from "react";

 

let arr=[

  { id:1,name:"geethika",marks:97},

  { id:2,name:"jyotika",marks:98},

  { id:3,name:"pramila",marks:93},

  { id:4,name:"sravani",marks:92},

  { id:5,name:"tabu",marks:99},

  { id:6,name:"sowmya",marks:97},

  { id:7,name:"navya",marks:79},

  { id:8,name:"devi",marks:100},

  { id:9,name:"snehaja",marks:90},

  { id:10,name:"durga",marks:96}

 

]

function App(){

   

    return(

      <div>

        <h1>Students</h1>

         {

          arr.map((student)=>{

            return <Student {...student} key={student.id}/>

          })

         }

      </div>

    )

  }

 

  export default App;

