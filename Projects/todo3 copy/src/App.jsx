
import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Todoitems from "./components/Todoitems";
import WelComeMessage from "./components/WelcomeMessage";
import './App.css';
import { useState } from "react";
function App() {
  const intialtodoItems = [];
  const [todoItems, setTodoItems] = useState(intialtodoItems);
  const handleNewItem=(itemName,itemDueDate)=>{
      const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate},];
      setTodoItems(newTodoItems);

  }
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>item.name!==todoItemName);
    setTodoItems(newTodoItems);
  }
  return <center className='todo'>
    <Appname></Appname>
    <Addtodo onNewitem={handleNewItem}></Addtodo>
    <Todoitems todoitems={todoItems}  onDeleteClick ={handleDeleteItem}></Todoitems>
    <WelComeMessage ></WelComeMessage>
   </center>
}

export default App
