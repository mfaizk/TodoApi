import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
const Root = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<App />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
