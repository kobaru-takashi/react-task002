import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

type Infos = {
  name: string;
  number: string;
};
const APP_KEY = "name";

export const MyPage = (props: Infos): JSX.Element => {
  const [state, setState] = useState(props); //オブジェクトを渡すことが可能
  const { name, number } = state;

  // useEffect(() => {
  //   console.log("This callback is for name only");
  //   return;
  // }, [name, number]);

  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  // const [state, dispatch] = useReducer(reducer, initialState)

  const history = useHistory();
  const handleClickPage1 = () => {
    history.push("/LogIn/myPage/Page1");
  };
  const handleClickPage1DetailA = () => {
    history.push("/LogIn/myPage/detailA");
  };
  const handleClickPage1DetailB = () => {
    history.push("/LogIn/myPage/detailB");
  };

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <>
      <h1>マイページ</h1>
      <p>
        {name}さん、残高{number}円です。
      </p>
      <button type="button" onClick={handleClickPage1}>
        Page1
      </button>
      <button type="button" onClick={handleClickPage1DetailA}>
        Page1DetailA
      </button>
      <button type="button" onClick={handleClickPage1DetailB}>
        Page1DetailB
      </button>
      <br />
      <br />
      <label>
        <input
          value={name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        名前
      </label>
      <br />
      <label>
        <input
          value={number}
          onChange={(e) => setState({ ...state, number: e.target.value })}
        />
        金額を入力
      </label>
      <br />
      <button onClick={() => setState(props)}>Reset</button>
    </>
  );
};

MyPage.defaultProps = {
  name: "",
  number: "",
};
