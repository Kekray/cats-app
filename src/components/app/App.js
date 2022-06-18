import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CatContext } from "../UI/context/CatContext";
import MyHeader from "../UI/header";
import CatList from "../UI/list/catLIst";
import FavList from "../UI/list/favList";

function App() {
  const savedCats = JSON.parse(localStorage.getItem("FavCats"));

  const [favourites, setFavourites] = useState(savedCats || []);

  const [cats, setCats] = useState([]);


  
  useEffect(() => {
    getCatRequest();
  }, []);

  const getCatRequest = async () => {
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=54&order=DESC?api_key=4cf3092e-218c-4c83-985f-e70322bf1b4a";

    const response = await fetch(url);
    const responseJson = await response.json();
    responseJson.forEach((obj) => {
      obj.liked = false;
    });
    setCats(responseJson);
  };

  // const loadSavedData = () => {
  //   const savedCats = JSON.parse(localStorage.getItem("FavCats"));
  //   if (savedCats.length > 0) {
  //     favourites.indexOf(savedCats.id) === -1
  //       ? setFavourites(savedCats)
  //       : console.log("This item already exists LOL");
  //   }
  //   console.log("Nothing to load");
  // };

  console.log(favourites);

  const addFavouriteCat = (cat) => {
    const newFavouriteList = [...favourites, cat];
    favourites.indexOf(cat.id) === -1
      ? setFavourites(newFavouriteList)
      : console.log("This item already exists");
    localStorage.setItem("FavCats", JSON.stringify(newFavouriteList));

  };

  const removeFavouriteCat = (cat) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== cat.id
    );

    setFavourites(newFavouriteList);
    localStorage.setItem("FavCats", JSON.stringify(newFavouriteList));
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
