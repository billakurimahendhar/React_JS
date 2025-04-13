import Item from "./Item";
const Fooditems =   ({items}) =>{

   
     return (
        
          <ul className="list-group">
          {items.map((item)=>(
           <Item key={item}fh={item}></Item>))}
          </ul>
        
     );
};
export default Fooditems;