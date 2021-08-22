import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Page404 } from "./components/pages/Page404";
import { PageBasicInfo } from "./components/pages/PageBasicInfo";
import { PageQuestion } from "./components/pages/PageQuestion";
import { PageConsultation } from "./components/pages/PageConsultation";
import { PageResult } from "./components/pages/PageResult";
import { Header } from "./components/organisms/Header";


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <PageBasicInfo/>
        </Route>

        <Route path="/question">
          <PageQuestion/>
        </Route>

        <Route path="/consultation">
          <PageConsultation/>
        </Route>

        <Route path="/result">
          <PageResult/>
        </Route>

        <Route path="*">
          <Page404/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
