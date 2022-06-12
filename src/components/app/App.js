import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import CatBlock from "../UI/catBlock/CatBlock";
import MyHeader from "../UI/header";
import MyButton from "../UI/button";
import MainPage from "../UI/pages/mainPage";
import FavPage from "../UI/pages/favPage";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <MyHeader>
          <Link to ="/">
          <MyButton>Все коты</MyButton>
          </Link>
          <Link to ="favourite/">
          <MyButton>Избранное</MyButton>
          </Link>
        </MyHeader>
        <div className="content">
          <Routes>
            <Route 
            path="/" 
            element={<MainPage />}
            />         
            <Route 
            path="favourite/"
            element={<FavPage />}            
            />
          </Routes> 
          <p>...загружаем еще котиков...</p> 
        </div>
      </>
    </Router>
  );
}

export default App;
