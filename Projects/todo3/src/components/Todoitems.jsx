import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";
import Todoitem from "./Todoitem";
const Todoitems=({todoitems,onDeleteClick})=>{
 const todoItemsFromContext= useContext(TodoItemsContext)
    return (
        <div className="items-Container">
          {todoitems.map((item) => (
            <Todoitem key = {item.name} td={item.dueDate} ti={item.name}  onDeleteClick={onDeleteClick}></Todoitem>
          ))}
        </div>
      );

}
export default Todoitems; 