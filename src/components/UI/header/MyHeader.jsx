import React from "react";
import styles from "./MyHeader.module.css";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";

const MyHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <MyButton>Все коты</MyButton>
      </Link>
      <Link to="favourite/">
        <MyButton>Избранное</MyButton>
      </Link>
    </div>
  );
};

export default MyHeader;
