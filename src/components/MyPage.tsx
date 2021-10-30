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
  amount: number;
  balance: number;
};

type ListInfos = {
  tradingDetail: Trading;
  tradingMoney: number;
  color: { color: string };
};

const tradingList: ListInfos[] = [];

// モーダル
// 本日の大事なポイント
// reduxの

export const MyPage = () => {
  const [name, setName] = useState("");
  const [amount, setInputAmount] = useState(0);
  const [balance, setBalance] = useState(500000);
  const { loginInfo } = useSelector((state: RootState) => state);
  const history = useHistory();
  const theme = createTheme();

  console.log("MyPage、login情報", loginInfo);

  const unCreatable =
    amount.toString() === "" || amount.toString() === "0";

  //入金+
  const handleClickPayment = () => {
    const result: boolean = window.confirm(`${amount}円入金されますか。`);

    if (result) {
      if (amount <= 500000) {
        setBalance(balance + amount);
        setName(name);
        setInputAmount(0);

        tradingList.push({
          color: { color: "blue" },
          tradingDetail: "入金",
          tradingMoney: amount,
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
      `${amount}円引き出しされますか。`
    );

    if (result) {
      if (!(balance - amount < 0)) {
        setBalance(balance - amount);
        setName(name);
        setInputAmount(0);

        tradingList.push({
          color: { color: "red" },
          tradingDetail: "引出",
          tradingMoney: amount,
        });
      } else {
        const result: boolean = window.confirm(
          `残高不足です。引き出し金額をご確認を下さい。`
        );
        if (result) {
          setBalance(balance);
          setName(name);
          setInputAmount(0);
        }
      }
    }
  };

  //ログアウト
  const logOutAction = () => {
    const result: boolean = window.confirm(
      "LogOutされますが、本当によろしいでしょうか？\nあなたの個人情報はすべて消えます。それでもいいですか。"
    );
    if (result) {
      history.push("/");
    }
  };

  const cancel = () => {
    setBalance(balance);
    setName(name);
    setInputAmount(0);
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
  }, [name, amount, balance, tradingList]);

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
    setBalance(balancePast());
    setName(name);
    setInputAmount(0);
  }, []);


  const handleClickPaymentPage = () => {
    history.push("/Payment");
  };
  const handleClickTransferPage = () => {
    history.push("/Transfer");
  };
  const handleClickWithdrawalPage = () => {
    history.push("/Withdrawal");
  };
  const handleClickUserInformationPage = () => {
    history.push("/UserInfo");
  };

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
            <Button variant="contained"  color="secondary" onClick={handleClickPaymentPage}>入金</Button>
            <Button variant="contained"  color="secondary" onClick={handleClickTransferPage}>引出</Button>
            <Button variant="contained"  color="secondary" onClick={handleClickWithdrawalPage} >振り込み</Button>
            <Button variant="contained"  color="secondary" onClick={handleClickUserInformationPage}>ユーザー情報</Button>
            <Button color="inherit"  onClick={logOutAction}> <LogoutIcon /></Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <h1>
        {loginInfo.info.nickname}さん、残高{balance}円です。
      </h1>
      <label>
        <input
          type="number"
          value={amount <= 0 ?  "": amount}
          onChange={(e) => setInputAmount(e.target.valueAsNumber)}
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
  amount: 0,
  balance: 500000,
};
