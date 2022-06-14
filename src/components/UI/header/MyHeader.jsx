import React from "react";
import propTypes from "prop-types";
import styles from "./MyHeader.module.css";
import { Link } from "react-router-dom";
import MyButton from "../button";

const MyHeader = (props) => {
  return (
    <div className={styles.header}>
      {props.children}
      <Link to="/">
        <MyButton>Все коты</MyButton>
      </Link>
      <Link to="favourite/">
        <MyButton>Избранное</MyButton>
      </Link>
    </div>
  );
};

// MyHeader.propTypes = {
//   children: propTypes.node.isRequired,
// };

export default MyHeader;
