import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Fooditems from "./components/fooditems";
import ErrorMessage from "./components/Errormessage";


function App() {
  let fooditems=['An item','A second item','A third item','A fourth item','And a fifth one'];
  
  return (
     <React.Fragment>
    <h1 className="food-heading">Healthy food</h1>
    <ErrorMessage items={fooditems}></ErrorMessage>
    <Fooditems items={fooditems}></Fooditems>
   </React.Fragment>);
  
 
    
}

export default App
