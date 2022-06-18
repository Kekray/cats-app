import React from "react";
import PropTypes  from "prop-types";
import styles from "../List.module.css";
import CatBlock from "../../catBlock/CatBlock";

const CatList = (props) => {
  const cats = props.cats;

  return (
    <div className={styles.wrapper}>
      {cats.map((cat) => (
        <CatBlock
          key={cat.id}
          value={cat}
        />
      ))}
    </div>
  );
};

CatList.propTypes = {
  cats: PropTypes.array
};


export default CatList;
