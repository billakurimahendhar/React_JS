import { useState } from "react";
import Item from "./Item";

const Fooditems =   ({items}) =>{
     let[activeitems,setactiveitems]=useState([]);
     let onBuyButton=(item,event)=>{
          let newItems=[...activeitems,item];
          setactiveitems(newItems);

     }
     return (
        
          <ul className="list-group">
          {items.map((item)=>(
           <Item key={item}
           fh={item}
           bought={activeitems.includes(item)}
           handleBuyButton={(event)=>onBuyButton(item,event)}>      </Item>))}
          </ul>
        
     );
};
export default Fooditems;