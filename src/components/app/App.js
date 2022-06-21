import React, { useEffect, useState } from "react";
import { CatContext } from "../context/CatContext";
import MyRouter from "../router/MyRouter";

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
    responseJson.forEach((cat) => {
      cat.liked = false;
    });
    setCats(responseJson);
  };

  const addFavouriteCat = (cat) => {
    const newFavouriteList = [...favourites, cat];
    favourites.indexOf(cat.id) === -1
      ? setFavourites(newFavouriteList)
      : console.log("This item already exists");
    localStorage.setItem("FavCats", JSON.stringify(newFavouriteList));
    checkData();
  };

  const removeFavouriteCat = (cat) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== cat.id
    );
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id === cat.id) cats[i].liked = false;
    }
    setFavourites(newFavouriteList);
    localStorage.setItem("FavCats", JSON.stringify(newFavouriteList));
  };

  const checkData = () => {
    if (cats !== []) {
      for (let i = 0; i < cats.length; i++) {
        for (let j = 0; j < favourites.length; j++) {
          if (favourites[j].id === cats[i].id) {
            cats[i].liked = true;
          }
        }
      }
    }
  };

  return (
    <CatContext.Provider
      value={{
        addFavouriteCat,
        removeFavouriteCat,
      }}
    >
      <MyRouter cats={cats} favourites={favourites} />
    </CatContext.Provider>
  );
}

export default App;
