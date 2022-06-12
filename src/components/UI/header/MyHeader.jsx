import React from "react";
import styles from "./MyHeader.module.css";

const MyHeader = (props) => {
  return <div className={styles.header}>{props.children}</div>;
};

export default MyHeader;
