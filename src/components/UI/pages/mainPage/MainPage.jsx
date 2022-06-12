import React from "react";
import styles from "../Pages.module.css";
import CatBlock from "../../catBlock/CatBlock";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <CatBlock />
    </div>
  );
};

export default MainPage;
