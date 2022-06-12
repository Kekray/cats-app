import React from "react";
import styles from "../Pages.module.css";
import CatBlock from "../../catBlock/CatBlock";

const MainPage = (props) => {
    return(
        <div className={styles.wrapper}>
            <CatBlock/>
        </div>
    )
};

export default MainPage;