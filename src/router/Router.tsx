import { PatternSharp } from "@mui/icons-material";
import { Redirect, Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { MyPage, Infos } from "../components/MyPage";
import LogIn from "../components/LogIn";
import { UserInfo, users } from "../dummy/user-dummy-model";

export const Router = (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/LogIn" component={LogIn} /><Route exact path="/LogIn/MyPage"
      component={(props: Infos) => <MyPage name={props.name} />}
    />
    {/* <Route exact path="/LogIn" render={(location:) => <MyPage {...props}{...console.log(props)}{...console.log("aaa")}   /> }  component={LogIn} /><Route exact path="/LogIn/MyPage"
      component={(props: UserInfo) => <MyPage {...props}  />}
    /> */}
    <Redirect path="/" to={"/"} />
  </Switch>


  // <Switch>
  //   <Route exact path="/">
  //     <Home />
  //   </Route>
  //   <Route
  //     path="/LogIn"
  //     render={({ match: { url } }) => (
  //       <Switch>
  //         <Route exact path={url}>
  //           <LogIn id={""}/>
  //         </Route>
  //         <Route
  //           path={`${url}/myPage`}
  //           render={({ match: { url } }) => (
  //             <Switch>
  //               {Page1Routes.map((route) => (
  //                 <Route
  //                   key={route.path}
  //                   exact={route.exact}
  //                   path={`${url}${route.path}`}
  //                 >
  //                   {route.children}
  //                 </Route>
  //               ))}
  //             </Switch>
  //           )}
  //         />
  //       </Switch>
  //     )}
  //   />
  // </Switch>
);
