import styles from "./foodinput.module.css"
const Foodinput=({handleKeyDown})=>{
    return(
        <input type="text"
        placeholder="Enter a food item" 
        className={styles.foodinput} 
        onKeyDown={handleKeyDown}/>
    );



}
export default Foodinput;
