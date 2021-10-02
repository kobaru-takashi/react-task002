import { useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/LogIn/myPage");
  };

  return (
    <>
      <h1>Page1DetailAページです。</h1>
      <button type="button" onClick={handleClick}>
        戻る
      </button>
    </>
  );
};
