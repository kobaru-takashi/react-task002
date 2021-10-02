import { useHistory } from "react-router-dom";

export const Page1DetailB = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/LogIn/myPage");
  };

  return (
    <div>
      <h1>Page1DetailBページです。</h1>
      <button type="button" onClick={handleClick}>
        戻る
      </button>
    </div>
  );
};
