import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import { LogIn } from "./LogIn";
import { Page2 } from "./Page2";
import { MyPage } from "./MyPage";
import { Page1DetailB } from "./Page1DetailB";

export function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/LogIn">LogIn</Link>
          <br />
          <Link to="/Page2">PAge2</Link>
          <br />
          <Link to="/">MyPage</Link>
        </div>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/LogIn"
            render={({ match: { url } }) => (
              <Switch>
                <Route exact path={url}>
                  <LogIn />
                </Route>
                <Route path={`${url}/myPage`}>
                  <MyPage />
                </Route>
                <Route path={`${url}/detailB`}>
                  <Page1DetailB />
                </Route>
              </Switch>
            )}
          />
          <Route path="/Page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

