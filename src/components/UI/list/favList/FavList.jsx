import React, { useContext } from "react";
import { CatContext } from "../../context/CatContext";

const FavList = () => {
  const msg = useContext(CatContext);

  return (
    <div>
      <div> Oh my FAVOURITE</div>
      <div>{msg}</div>
      <div></div>
    </div>
  );
};

export default FavList;
