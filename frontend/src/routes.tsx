import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./global-styles";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";
import { User } from "./pages/User";
import { Login } from "./pages/Login";
import { Compra } from "./pages/Compra";

function Rotas() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compra/:id" element={<Compra />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
