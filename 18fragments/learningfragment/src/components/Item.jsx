import styles from "./container1.module.css"
const Item=({fh, bought,handleBuyButton})=>{
   
    return(
        <>
        <li className={`list-group-item kg-item ${bought &&'active'}`}><span className="kg-span">{fh}</span>
        <button className={`${styles.button} btn btn-info`}   onClick={handleBuyButton}>Buy</button></li>
        </>
    );

}
export default Item;