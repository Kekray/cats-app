import React, { useEffect, useState } from "react";

import { CatContext } from "../context/CatContext";
import MyRouter from "../router/MyRouter";
import MyHeader from "../UI/header/MyHeader";
import PostService from "../../API/PostService";
// import MyLoader from "../UI/loader/MyLoader";

function App() {
  const savedCats = JSON.parse(localStorage.getItem("FavCats"));

  const [favCats, setFavCats] = useState(savedCats || []);

  const [cats, setCats] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      getCatRequest();
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCatRequest = async () => {
    const response = await PostService.getAll();
    const responseJson = await response.data;
    responseJson.forEach((cat) => {
      cat.liked = false;
    });
    setCats(responseJson);
    setLoading(false);

    // console.log(response);
  };

  const addFavouriteCat = (cat) => {
    const newFavouriteList = [...favCats, cat];
    favCats.indexOf(cat.id) === -1
      ? setFavCats(newFavouriteList)
      : console.log("This item already exists");
    localStorage.setItem("FavCats", JSON.stringify(newFavouriteList));
    checkData();
  };

  const removeFavouriteCat = (cat) => {
    const newFavouriteList = favCats.filter(
      (favourite) => favourite.id !== cat.id
    );
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id === cat.id) cats[i].liked = false;
    }
    setFavCats(newFavouriteList);
    localStorage.setItem("FavCats", JSON.stringify(newFavouriteList));
  };

  const checkData = () => {
    if (cats !== []) {
      for (let i = 0; i < cats.length; i++) {
        for (let j = 0; j < favCats.length; j++) {
          if (favCats[j].id === cats[i].id) {
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
        cats,
        favCats,
        loading,
      }}
    >
      <MyRouter>
        <MyHeader />
        
      </MyRouter>
    </CatContext.Provider>
  );
}

export default App;
