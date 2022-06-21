import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHeader from "../UI/header/MyHeader";
import propTypes from "prop-types";
import CatList from "../UI/list/catLIst/CatList";
import FavList from "../UI/list/favList/FavList";

const MyRouter = (props) => {
  return (
    <Router>
      <MyHeader />
      <Routes>
        <Route path="/" element={<CatList cats={props.cats} />} />
        <Route path="favourite/" element={<FavList favCats={props.favourites} />} />
      </Routes>
    </Router>
  );
};

MyRouter.propTypes = {
  cats: propTypes.array,
  favourites: propTypes.array,
};

export default MyRouter;
