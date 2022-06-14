import React from "react";
import styles from "../Pages.module.css";
import propTypes from "prop-types";
import CatBlock from "../../catBlock/CatBlock";

const CatList = (props) => {
  const cats = props.cats;

  return (
    <div className={styles.wrapper}>
      {cats.map((cat, index) => (
        <CatBlock key={index} value={cat} />
      ))}
    </div>
  );
};

// CatList.propTypes = {
//   cats: propTypes.node.isRequired,
// };

export default CatList;
