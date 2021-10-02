import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

type Infos  = {
  id: string;
  pass: string;
};

export const LogIn = (props: Infos): JSX.Element => {
  const [state, setState] = useState(props); //オブジェクトを渡すことが可能
  const { id, pass } = state;
  const logInId = "kobaru";
  const logInPass = "takashi";
  const history = useHistory();
  const handleClick = () => {
    if (id === logInId && pass === logInPass) {
      history.push("/LogIn/myPage");
    }
  };

  return (
    <>
      <h1>ログインページ</h1>
      <p>IDとパスワードの入力をして下さい。</p>
      <label>
        <input
          value={id}
          onChange={(e) => setState({ ...state, id: e.target.value })}
        />
        ID
      </label>
      <br />
      <label>
        <input
          value={pass}
          onChange={(e) => setState({ ...state, pass: e.target.value })}
        />
        パスワード
      </label>
      <br />
      <button onClick={() => setState(props)}>リセット</button>
      <button type="button" onClick={handleClick}>ログイン</button>
    </>
  );
};

LogIn.defaultProps = {
  id: "",
  pass: "",
};
