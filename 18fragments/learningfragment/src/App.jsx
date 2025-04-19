import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Fooditems from "./components/fooditems";
import ErrorMessage from "./components/Errormessage";
import Container from "./components/container";
import Foodinput from "./components/Foodinput";


function App() {
  let fooditems=['An item','A second item','A third item','A fourth item','And a fifth one'];
  let texttoshow='Food item entered by the user';
  const onHandle=(event)=>{
    console.log(event.target.value);
    
}
  return (
    <>
     <Container>
    <h1 className="food-heading">Healthy food</h1>
    <ErrorMessage items={fooditems}></ErrorMessage>
    <Foodinput onHandle={onHandle}> </Foodinput>
    <p>{texttoshow}</p>
    <Fooditems items={fooditems}></Fooditems>
    </Container>
  { /*<Container>
      <p>Hello I am aspring web developer</p>

    </Container>*/}
    </>
    );
   
  
 
    
}

export default App;
