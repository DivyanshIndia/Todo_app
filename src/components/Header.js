import React from "react";
import styles from "./Header.module.css";

const Header = () =>{
    return (<React.Fragment>
        <div className={styles.upper}>
            <h1>DIVYANSH TODO</h1>
        </div>
    </React.Fragment>);
}
export default Header;