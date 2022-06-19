import React from "react";
import PropTypes from "prop-types";
import styles from "../List.module.css";
import CatBlock from "../../catBlock/CatBlock";

const FavList = (props) => {
  const favCats = props.favCats;

  return (
    <div className={styles.wrapper}>
      {favCats.map((cat) => (
        <CatBlock key={cat.id} value={cat} />
      ))}
    </div>
  );
};

FavList.propTypes = {
  favCats: PropTypes.array,
};

export default FavList;
