import React, { useState } from "react";

function App() {

  const [name,setName] = useState("");
  const [heading,setHeading] = useState("");

  function handleChange(event){
    
    setName(event.target.value);
  
  };

  function handleClick(event){
    setHeading(name);
    event.preventDefault();
  };


  return (
    <form onSubmit = {handleClick}>
      <div className="container">
        <h1>Hello {heading}</h1>
        <input onChange ={handleChange} value ={name} type="text" placeholder="What's your name?" />
        <button type = "submit">Submit</button>
      </div>
    </form>
    
      
  );
}

export default App;
