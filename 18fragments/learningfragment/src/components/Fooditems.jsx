import Item from "./Item";
const Fooditems =   ({items}) =>{
     return (
        
          <ul className="list-group">
          {items.map((item)=>(
           <Item key={item}fh={item} handleBuyButton={()=>console.log(`${item}`)}></Item>))}
          </ul>
        
     );
};
export default Fooditems;