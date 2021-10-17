import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export const Page1DetailA = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/LogIn/myPage");
  };

  return (
    <>
      <h1>入金ページです。</h1>
      <Button variant="contained"  color="secondary" onClick={handleClick}>
        戻る
      </Button>
    </>
  );
};
