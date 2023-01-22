import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Person=(props)=>{
    return (
        <>
        <h1>FirstName:{props.name}</h1>
        <h1>LastName:{props.lname}</h1>
        <h2>Age:{props.age}</h2>
        </>
    );
}
const Appprops=()=>{
 const name ="Prasad";
 const showOnlyName=false;
  return (
    <div className='App'>
     <Person name={'prasad'} lname={'vinukonda'} age={'25'}/>
     <Person name={'sai'} lname={'vinukonda'} age={'26'}/>
   
    </div>
  );

}

export default Appprops
