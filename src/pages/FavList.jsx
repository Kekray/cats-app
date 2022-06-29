import React, { useContext } from "react";
import styles from "./List.module.css";
import CatBlock from "../components/UI/catBlock/CatBlock";
import { CatContext } from "../components/context/CatContext";

const FavList = () => {
  const { favCats } = useContext(CatContext);

  return (
    <div className={styles.wrapper}>
      {favCats.map((cat) => (
        <CatBlock key={cat.id} value={cat} />
      ))}
    </div>
  );
};

export default FavList;
