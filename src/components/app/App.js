import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CatContext } from "../UI/context/CatContext";
import MyHeader from "../UI/header";
import CatList from "../UI/list/catLIst";
import FavList from "../UI/list/favList";

function App() {
  const [favourites, setFavourites] = useState([]);

  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCatRequest();
  }, []);

  const getCatRequest = async () => {
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=12&page=10&order=DESC?api_key=4cf3092e-218c-4c83-985f-e70322bf1b4a";

    const response = await fetch(url);
    const responseJson = await response.json();
    responseJson.forEach((obj) => {
      obj.liked = false;
    });
    setCats(responseJson);
  };

  // Добавить сравнение id в массиве и с кликом
  const addFavouriteCat = (cat) => {
    const newFavouriteList = [...favourites, cat];
    favourites.indexOf(cat.id) === -1
      ? setFavourites(newFavouriteList)
      : console.log("This item already exists");
  };

  const removeFavouriteCat = (cat) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== cat.id
    );

    setFavourites(newFavouriteList);
  };

  return (
    <CatContext.Provider
      value={{
        addFavouriteCat,
        removeFavouriteCat,
      }}
    >
      <Router>
        <>
          <MyHeader />
          <Routes>
            <Route path="/" element={<CatList cats={cats} />} />
            <Route
              path="favourite/"
              element={<FavList favCats={favourites} />}
            />
          </Routes>
        </>
      </Router>
    </CatContext.Provider>
  );
}

export default App;
