import { Redirect, Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { SignUp } from "../components/SignUp";
import { MyPage, Infos } from "../components/MyPage";
import LogIn from "../components/LogIn";

export const Router = (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/SignUp" component={SignUp} />
    <Route exact path="/LogIn" component={LogIn} /><Route exact path="/LogIn/MyPage" component={(props: Infos) => <MyPage name={props.name} />}/>
    <Redirect path="/" to={"/"} />
  </Switch>
);
