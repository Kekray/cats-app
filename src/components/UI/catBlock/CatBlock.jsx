import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CatContext } from "../../context/CatContext";
import styles from "./CatBlock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const CatBlock = (props) => {
  const cat = props.value;

  const liked = cat.liked;

  const [isFav, setIsFav] = useState(liked);

  const { addFavouriteCat, removeFavouriteCat,  } = useContext(CatContext);

  const toggleLike = () => {
    setIsFav(!isFav);
    cat.liked = !liked;
  };

  const heartFill = isFav ? faHeartSolid : faHeartRegular;

  const heartStyle = isFav
    ? `${styles.FontAwesomeIcon}`
    : `${styles.FontAwesomeIcon} ${styles.showOnHover}`;

  return (
    <div
      className={styles.imageContainer}
      onClick={() => {
        toggleLike();
        isFav ? removeFavouriteCat(cat) : addFavouriteCat(cat);
      }}
    >

      <img src={cat.url} alt={""}/>
      <FontAwesomeIcon icon={heartFill} className={heartStyle} />
    </div>
  );
};

CatBlock.propTypes = {
  value: PropTypes.object,
};

export default CatBlock;
