import React from "react";
import styles from "./MyWrapper.module.css";

const MyWrapper = (props) => {
    return(
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
};

export default MyWrapper;