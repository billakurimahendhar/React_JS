
import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Todoitem1 from "./components/Todoitem1"
import Todoitem2 from "./components/Todoitem2"
import './App.css';
function App() {
  return <center className='todo'>
    <Appname></Appname>
    <Addtodo></Addtodo>
    <div className='items'>

    <Todoitem1></Todoitem1>
    <Todoitem2></Todoitem2>

    </div>
    
  </center>
}

export default App
