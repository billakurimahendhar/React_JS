
import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Todoitems from "./components/Todoitems";
import './App.css';
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  return <center className='todo'>
    <Appname></Appname>
    <Addtodo></Addtodo>
    <Todoitems todoitems={todoItems}></Todoitems>
    
  </center>
}

export default App
