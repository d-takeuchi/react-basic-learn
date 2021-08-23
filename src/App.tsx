import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/organisms/Header";
import { InputDataProvider } from "./providers/InputDataProvider";
import { Router } from "./router/Router";


function App() {

  return (
    <InputDataProvider>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </InputDataProvider>
  );
}

export default App;
