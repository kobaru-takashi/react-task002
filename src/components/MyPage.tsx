import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

type Infos = {
  name: string;
  inputAmount: number;
  balance: number;
};
type ListInfos = {
  tradingDetail: string;
  tradingMoney: number;
  color: { color: string };
};

const tradingList: ListInfos[] = [];

export const MyPage = (props: Infos): JSX.Element => {
  const [state, setState] = useState(props); //オブジェクトを渡すことが可能
  const { name, inputAmount, balance } = state;

  const unCreatable = inputAmount.toString() === NaN.toString();

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

  //入金+
  const handleClickPayment = () => {
    const result: boolean = window.confirm(`${inputAmount}円入金されますか？`);

    if (result) {
      setState({ balance: balance + inputAmount, name, inputAmount: NaN });

      tradingList.push({
        color: { color: "blue" },
        tradingDetail: "入金",
        tradingMoney: inputAmount,
      });
    }
  };

  //出金-
  const handleClickWithdrawal = () => {
    const result: boolean = window.confirm(
      `${inputAmount}円引き出しされますか？`
    );

    if (result) {
      setState({ balance: balance - inputAmount, name, inputAmount: NaN });
      tradingList.push({
        color: { color: "red" },
        tradingDetail: "引出",
        tradingMoney: inputAmount,
      });
    }
  };

  const cancel = () => {
    setState({ balance, name, inputAmount: NaN });
  };
  const listItems = (
    <ul>
      {tradingList.map((v, i) => (
        <li key={i} style={v.color}>
          取引内容：{v.tradingDetail}　　{v.tradingMoney}円
        </li>
      ))}
    </ul>
  );

  useEffect(() => {

    console.log(tradingList);

  }, [state, name, inputAmount, balance, tradingList]);

  return (
    <>
      <h1>マイページ</h1>
      <p>
        {name}さん、残高{balance}円です。
      </p>
      <button type="button" onClick={handleClickPage1DetailA}>
        入金
      </button>
      <button type="button" onClick={handleClickPage1DetailB}>
        引き出し
      </button>
      <br />
      <label>
        <input
          type="number"
          value={inputAmount}
          onChange={(e) =>
            setState({ ...state, inputAmount: e.target.valueAsNumber })
          }
        />
        金額を入力
      </label>
      <br />
      <button type="button" disabled={unCreatable} onClick={handleClickPayment}>
        入金
      </button>
      <button
        type="button"
        disabled={unCreatable}
        onClick={handleClickWithdrawal}
      >
        引き出し
      </button>
      <button onClick={cancel}>取り消し</button>
      <br />
      <ul>{listItems}</ul>
    </>
  );
};

MyPage.defaultProps = {
  name: "",
  inputAmount: NaN,
  balance: 500000,
};
