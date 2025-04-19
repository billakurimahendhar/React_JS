import styles from "./container1.module.css"
const Container=(props)=>{
    return <div className={styles.container1}>{props.children}</div>
};
export default Container;