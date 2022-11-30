import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import propTypes from "prop-types";
import CatList from "../../pages/CatList";
import FavList from "../../pages/FavList";

const MyRouter = ({ children }) => {
  return (
    <Router basename="/">
      {children}
      <Routes>
        <Route path="/" element={<CatList />} />
        <Route path="/favourite" element={<FavList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

MyRouter.propTypes = {
  children: propTypes.node.isRequired,
};

export default MyRouter;
