import React from "react";
import styles from "./MyHeader.module.css";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";

const MyHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <MyButton>All cats</MyButton>
      </Link>
      <Link to="favourite/">
        <MyButton>Favourites</MyButton>
      </Link>
    </div>
  );
};

export default MyHeader;
