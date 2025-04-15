import Todoitem from "./Todoitem";
const Todoitems=({todoitems})=>{
    return (
        <div className="items-Container">
          {todoitems.map((item) => (
            <Todoitem key = {item.name} td={item.dueDate} ti={item.name}></Todoitem>
          ))}
        </div>
      );

}
export default Todoitems;