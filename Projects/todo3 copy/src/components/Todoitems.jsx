import Todoitem from "./Todoitem";
const Todoitems=({todoitems,onDeleteClick})=>{
    return (
        <div className="items-Container">
          {todoitems.map((item) => (
            <Todoitem key = {item.name} td={item.dueDate} ti={item.name}  onDeleteClick={onDeleteClick}></Todoitem>
          ))}
        </div>
      );

}
export default Todoitems; 