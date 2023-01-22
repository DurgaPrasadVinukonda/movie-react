import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const Person=(props)=>{
    return (
        <>
        <h1>FirstName:{props.name}</h1>
        <h1>LastName:{props.lname}</h1>
        <h2>Age:{props.age}</h2>
        </>
    );
}
const App=()=>{
 const name ="Prasad";
 const showOnlyName=false;

 const [counter,setCounter]=useState(0);
  return (
    <div className='App'>
     <button onClick={()=>{setCounter((prevCount)=> prevCount -1 )}}>-</button>
     <h1>{counter}</h1>
     <button onClick={()=>{setCounter((prevCount)=>prevCount+1)}}>+</button>
    </div>
  );

}

export default App
