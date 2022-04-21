import React, { ReactElement, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Plans } from "./components/Plans/Plans";
import UserContext from "./components/UserContext/UserContext";
export const AppWrapper = (): ReactElement => {
  const user = useContext(UserContext);

  if (user.username !== "") {
    //Aca va mi componente que quiero que se muestre cuando se logueo el usuario. (Layout con navbar y footer)
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/misplanes" element={<Plans />} />
        </Routes>
      </BrowserRouter>
      // <button onClick={() => user.logout()} className="btn btn-outline-dark">
      //   Salir
      // </button>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
};
