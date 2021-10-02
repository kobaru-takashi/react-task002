import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { LogIn } from "../components/LogIn";
import { Page2 } from "../components/Page2";
import { MyPage } from "../components/MyPage";
import { Page1DetailB } from "../components/Page1DetailB";

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
  );
};
