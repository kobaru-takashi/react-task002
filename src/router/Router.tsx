import { Redirect, Switch, Route } from "react-router-dom";
import { Home } from "../components/pages/home/Home";
import { SignUp } from "../components/pages/signup/SignUp";
import { Payment } from "../components/pages/payment/Payment";
import { Transfer } from "../components/pages/transfer/Transfer";
import { Withdrawal } from "../components/pages/withdrawal/Withdrawal";
import { UserInfo } from "../components/pages/userinfo/UserInfo";
import { UserInfoEdit } from "../components/pages/userinfoedit/UserInfoEdit";
import { MyPage, Infos } from "../components/pages/mypage/MyPage";
import LogIn from "../components/pages/login/LogIn";

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

