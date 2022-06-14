import React, { useState } from "react";
import styles from "./CatBlock.module.css";

import { CatContext } from "../context/CatContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const CatBlock = (props) => {
  const cat = props.value;

  const [isFav, setIsFav] = useState(false);

  const toggleHeartIcon = () => setIsFav(!isFav);

  return (
    <div className={styles.catBlock}>
      <span>{cat.name}</span>
      <img className={styles.image} src={cat.image.url} alt="cat"></img>
      <div
        className={
          isFav
            ? `${styles.catButtonWrapper} ${styles.clicked}`
            : `${styles.catButtonWrapper} ${styles.showOnHover}`
        }
      >
        <button
          className={
            isFav
              ? `${styles.catButton} ${styles.clicked}`
              : `${styles.catButton} ${styles.showOnHover}`
          }
        >
          <FontAwesomeIcon
            type="button"
            onClick={toggleHeartIcon}
            icon={isFav ? faHeartSolid : faHeartRegular}
            className={styles.FontAwesomeIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default CatBlock;
