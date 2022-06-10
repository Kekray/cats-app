import React from "react";
import MyButton from "../UI/button";
import MyHeader from "../UI/header";
import MyWrapper from "../UI/wrapper";
import CatInfo from "../catInfo";

import "./app.css";

 function App() {

    return (
      <>
          <MyHeader>
            <MyButton>Любимые котики</MyButton>
            <MyButton>Все котики</MyButton>
          </MyHeader>
          <MyWrapper>
            <CatInfo></CatInfo>
            <CatInfo></CatInfo>
            <CatInfo></CatInfo>
          </MyWrapper>
        <p>...загружаем еще котиков...</p>
      </>
    );
  }

  export default App;