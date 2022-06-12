import React, { useState } from "react";
import styles from "./CatBlock.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

//TODO:
// <x>Создать замену иконки по true (Sol)/false (Reg)
// Создать логику избранного
// Подключить API
// <x> Подрубить React router

const CatBlock = (props) => {
  const [isFav, setIsFav] = useState(false);

  const toggleHeartIcon = () => setIsFav(!isFav);

  return (
    <div className={styles.catBlock}>
      <span>Cat</span>
      <div className={styles.catButtonWrapper}>
        <button className={`${styles.catButton} ${styles.showOnHover}`}>
          <FontAwesomeIcon
            type="button"
            onClick={toggleHeartIcon}
            icon={isFav ? faHeartSolid : faHeartRegular}
            className={`${styles.FontAwesomeIcon} ${styles.showOnHover}`}
          />
        </button>
      </div>
    </div>
  );
};

export default CatBlock;
