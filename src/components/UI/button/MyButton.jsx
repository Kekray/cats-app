import React from "react";
import styles from "./MyButton.module.css";
import propTypes from "prop-types";

const MyButton = ({ children }) => {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  children: propTypes.node.isRequired,
};

export default MyButton;
