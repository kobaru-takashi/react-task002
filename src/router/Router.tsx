import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { LogIn } from "../components/LogIn";
import { Page2 } from "../components/Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
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
            <Route
              path={`${url}/myPage`}
              render={({ match: { url } }) => (
                <Switch>
                  {Page1Routes.map((route) => (
                    <Route
                      key={route.path}
                      exact={route.exact}
                      path={`${url}${route.path}`}
                    >
                      {route.children}
                    </Route>
                  ))}
                </Switch>
              )}
            />
          </Switch>
        )}
      />
      <Route path="/Page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
