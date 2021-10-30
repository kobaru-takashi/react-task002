import { Redirect, Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { SignUp } from "../components/SignUp";
import { Payment } from "../components/Payment";
import { Transfer } from "../components/Transfer";
import { Withdrawal } from "../components/Withdrawal";
import { UserInfo } from "../components/UserInfo";
import { UserInfoEdit } from "../components/UserInfoEdit";
import { MyPage, Infos } from "../components/MyPage";
import LogIn from "../components/LogIn";

export const Router = (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/SignUp" component={SignUp} />
    <Route exact path="/Payment" component={Payment} />
    <Route exact path="/Transfer" component={Transfer} />
    <Route exact path="/Withdrawal" component={Withdrawal} />
    <Route exact path="/UserInfo" component={UserInfo} />
    <Route exact path="/UserEdit" component={UserInfoEdit} />
    <Route exact path="/LogIn" component={LogIn} /><Route exact path="/LogIn/MyPage" component={(props: Infos) => <MyPage name={props.name} />}/>
    <Route exact path="/LogIn" component={LogIn} /><Route exact path="/LogIn/MyPage" component={(props: Infos) => <MyPage name={props.name} />}/>

    <Redirect path="/" to={"/"} />
  </Switch>
);

