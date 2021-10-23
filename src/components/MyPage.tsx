import React, { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../app/store";

type Trading = "入金" | "引出" | "振込";

export type Infos = {
  name: string;
  inputAmount: number;
  balance: number;
};

type ListInfos = {
  tradingDetail: Trading;
  tradingMoney: number;
  color: { color: string };
};

const tradingList: ListInfos[] = [];

// LogOut ボタン作成と初期化の実行
// 登録画面 store に入れる。
// dummyのkobaruを残しておく。
// initialStateDataにdummyデータを入れておく。
// 登録画面で登録したデータでlogInする。
// emailとpassword以外のデータを表示する。

export const MyPage = (props: Infos) => {
  const [name, nameState] = useState("");
  const [inputAmount, inputAmountState] = useState(NaN);
  const [balance, balanceState] = useState(500000);
  const { userInfo } = useSelector((state: RootState) => state.userInfo);
  const history = useHistory();
  const theme = createTheme();

  console.log("bbb", userInfo);

  const unCreatable =
    inputAmount.toString() === NaN.toString() || inputAmount.toString() === "0";

  //入金+
  const handleClickPayment = () => {
    const result: boolean = window.confirm(`${inputAmount}円入金されますか。`);

    if (result) {
      if (inputAmount <= 500000) {
        balanceState(balance + inputAmount);
        nameState(name);
        inputAmountState(NaN);

        tradingList.push({
          color: { color: "blue" },
          tradingDetail: "入金",
          tradingMoney: inputAmount,
        });
      } else {
        const result: boolean = window.confirm(
          `1度に入金出来る金額は500,000円までです。`
        );
      }
    }
  };

  //出金-
  const handleClickWithdrawal = () => {
    const result: boolean = window.confirm(
      `${inputAmount}円引き出しされますか。`
    );

    if (result) {
      if (!(balance - inputAmount < 0)) {
        balanceState(balance - inputAmount);
        nameState(name);
        inputAmountState(NaN);

        tradingList.push({
          color: { color: "red" },
          tradingDetail: "引出",
          tradingMoney: inputAmount,
        });
      } else {
        const result: boolean = window.confirm(
          `残高不足です。引き出し金額をご確認を下さい。`
        );
        if (result) {
          balanceState(balance);
          nameState(name);
          inputAmountState(NaN);
        }
      }
    }
  };

  //出金-
  const logOutAction = () => {
    const result: boolean = window.confirm(
      "LogOutされますが、本当によろしいでしょうか？\nあなたの個人情報はすべて消えます。それでもいいですか。"
    );
    if (result) {
      history.push("/");
    }
  };

  const cancel = () => {
    balanceState(balance);
    nameState(name);
    inputAmountState(NaN);
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
    // console.log(tradingList);
  }, [name, inputAmount, balance, tradingList]);

  useEffect(() => {
    const balancePast = (): number => {
      let money: number = MyPage.defaultProps.balance;
      tradingList.forEach((v) => {
        if (v.tradingDetail === "入金") {
          money += v.tradingMoney;
        } else if (v.tradingDetail === "引出") {
          money -= v.tradingMoney;
        }
      });
      return money;
    };
    balanceState(balancePast());
    nameState(name);
    inputAmountState(NaN);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <AccountBalanceIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              MY PAGE
            </Typography>
            <Button variant="contained" color="primary" onClick={logOutAction}>
              <LogoutIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <h1>
        {userInfo.nickname}さん、残高{balance}円です。
      </h1>
      <label>
        <input
          type="number"
          value={inputAmount}
          onChange={(e) => inputAmountState(e.target.valueAsNumber)}
        />
        金額を入力
      </label>
      <br />
      <Button
        variant="contained"
        color="primary"
        disabled={unCreatable}
        onClick={handleClickPayment}
      >
        入金
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={unCreatable}
        onClick={handleClickWithdrawal}
      >
        引き出し
      </Button>
      <Button
        variant="contained"
        color="error"
        disabled={unCreatable}
        onClick={cancel}
      >
        取り消し
      </Button>
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
