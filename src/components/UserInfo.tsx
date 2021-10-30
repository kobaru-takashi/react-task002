import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserInfo = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/LogIn/myPage");
  };
  const handleClickUserEdit = () => {
    history.push("/UserEdit");
  };

  return (
    <>
    <Button variant="contained"  color="secondary" onClick={handleClick}>topページ</Button>
    <Button variant="contained"  color="secondary" >入金ページ</Button>
    <Button variant="contained"  color="secondary" >引出ページ</Button>
    <Button variant="contained"  color="secondary" >振込ページ</Button>
    <Button variant="contained"  color="secondary" >ユーザ情報ページ</Button>
    <Button color="inherit"  > <LogoutIcon /></Button>

      <h1>ユーザー情報ページです。</h1>
      <div>ユーザー情報一覧表示</div>
      <div>編集ボタン</div>
      <div></div>
      <div>確定ボタン</div>

      <Button variant="contained"  color="secondary" onClick={handleClickUserEdit}>
      ユーザー情報編集
      </Button>
    </>
  );
};