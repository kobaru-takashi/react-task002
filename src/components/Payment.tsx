import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export const Payment = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/LogIn/myPage");
  };

  return (
    <>
    <Button variant="contained"  color="secondary" onClick={handleClick}>topページ</Button>
    <Button variant="contained"  color="secondary" >入金ページ</Button>
    <Button variant="contained"  color="secondary" >引出ページ</Button>
    <Button variant="contained"  color="secondary" >振込ページ</Button>
    <Button variant="contained"  color="secondary" >ユーザ情報ページ</Button>
    <Button color="inherit"  > <LogoutIcon /></Button>
      <h1>入金ページです。</h1>
      <div>残高表示</div>
      <div>inputBox</div>
      <div>リセットボダン</div>
      <div>確定ボタン</div>
    </>
  );
};