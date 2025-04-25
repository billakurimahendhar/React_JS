import { useState,useRef} from "react";
import { BiMessageAdd } from "react-icons/bi";
function Addtodo({onNewitem}) {
   
    const todoNameElement=useRef();
    const dueDateElement=useRef();
   
    const handleAddButtonClicked=(event)=>{
        event.preventDefault();
        const todoName=todoNameElement.current.value;
        const todoDueDate=dueDateElement.current.value;
        todoNameElement.current.value="";
        dueDateElement.current.value="";
        onNewitem(todoName,todoDueDate);
        }
    
   return <div className="container text-center f1 ">

        <form className="row kg-row"  onSubmit={handleAddButtonClicked}>
        
            <div className="col-6">
                <input type="text" 
                ref={todoNameElement}
                placeholder="Enter Todo Here" 
                 
                />
            </div>

            <div className="col-4">
                <input type="date"
                ref={dueDateElement}
                />
            </div>

            <div className="col-2"><button  className="btn btn-success kg-button"><BiMessageAdd /></button></div>
        </form>

    </div>;

}
export  default Addtodo;