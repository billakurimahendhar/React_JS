import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Fooditems from "./components/fooditems";
import ErrorMessage from "./components/Errormessage";
import Container from "./components/container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";


function App() {
  let [fooditems,setFooditem]=useState([]);
  const onKeyDown=(event)=>{
    if(event.key==="Enter"){
     let newfooditem=event.target.value;
      let newfooditems=[...fooditems,newfooditem];
      setFooditem(newfooditems);
    }
}
  return (
    <>
     <Container>
    <h1 className="food-heading">Healthy food</h1>
    <ErrorMessage items={fooditems}></ErrorMessage>
    <Foodinput handleKeyDown={onKeyDown}> </Foodinput>
    <Fooditems items={fooditems}></Fooditems>
    </Container>
  
    </>
    );
   
  
 
    
}

export default App;
