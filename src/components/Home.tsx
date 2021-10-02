import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/LogIn");
  };

  return (
    <>
      <h1>Homeページ</h1>
      <p>ログインページへ進む場合、移動ボタンを押して下さい。</p>
      <button type="button" onClick={handleClick}>
        移動
      </button>
    </>
  );
};
