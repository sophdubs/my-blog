import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Article from "./Article";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/article/:articleId" component={Article}></Route>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
