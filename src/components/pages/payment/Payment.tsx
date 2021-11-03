import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useCallback ,useState } from "react";
import { Input } from "../../UI/input";


export const Payment = () => {

  const history = useHistory();

  const [state,setState] = useState("kobaru")
  const [state1,setState1] = useState("kobaru")
  

  const handleClick = () => {
    history.push("/LogIn/myPage");
  };

  const handleReset = useCallback(()=>{
    if (state === "kobaru") {
      setState("takashi");
    } else {
      setState("kobaru");
    }
  },
  [state]//deps
  );

  const handleReset1 = () => {
    if (state1 === "kobaru") {
      setState1("takashi");
    } else {
      setState1("kobaru");
    }
  }

  return (
    <>
    <Button variant="contained"  color="secondary" onClick={handleClick}>topページ</Button>
    <Button variant="contained"  color="secondary" >入金ページ</Button>
    <Button variant="contained"  color="secondary" >引出ページ</Button>
    <Button variant="contained"  color="secondary" >振込ページ</Button>
    <Button variant="contained"  color="secondary" >ユーザ情報ページ</Button>
    <Button color="inherit"  > <LogoutIcon /></Button>
      <h1>入金ページです。</h1>
      <h1>{state}</h1>
      <h1>{state1}</h1>
      <div>残高表示</div>
      <input placeholder="入金額"  />
       <Input label={'入金額'}  onEnterPressKey={
         ()=>{console.log("出来た！")}
       }/>
      <button onClick={handleReset}>リセットボタン</button>
      <button onClick={handleReset1}>リセットボタン</button>
      <button>確定ボタン</button>
    </>
  );
};