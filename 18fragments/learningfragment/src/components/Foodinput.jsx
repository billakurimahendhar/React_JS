import styles from "./foodinput.module.css"
const Foodinput=({onHandle})=>{
    

    
    return(
        <input type="text"placeholder="Enter a food item" className={styles.foodinput} 
        onChange={onHandle}/>
    );



}
export default Foodinput;
