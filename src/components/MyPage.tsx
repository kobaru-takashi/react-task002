import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <>
      <h1>マイページ</h1>
      <p>
        {name}さん、残高{number}円です。
      </p>
      <button onClick={() => setState(props)}>Reset</button>
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
      <Link to="/LogIn/myPage/Page1">Page1</Link>
      <br />
      <Link to="/LogIn/myPage/detailA">Page1DetailA</Link>
      <br />
      <Link to="/LogIn/myPage/detailB">Page1DetailB</Link>
      <br />

    </>
  );
};

MyPage.defaultProps = {
  name: "",
  number: "",
};
