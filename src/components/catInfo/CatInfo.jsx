import React, { useState } from "react";
import styles from "./CatInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartReg } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSol } from "@fortawesome/free-solid-svg-icons";

//TODO:
// Создать замену иконки по true (Sol)/false (Reg)
// Создать логику избранного
// Подключить API
// Подрубить React router

const CatInfo = (props) => {
  const [name, setName] = useState("Cat");

  const [fav, setFav] = useState(false); // 
  return (
    <div className={styles.catBlock}>
      <div className={styles.catButtonWrapper}>
        <button className={`${styles.catButton} ${styles.showOnHover}`}>
          <FontAwesomeIcon
            icon={faHeartReg}
            className={`${styles.FontAwesomeIcon} ${styles.showOnHover}`}
          />
        </button>
      </div>
    </div>
  );
};

export default CatInfo;
