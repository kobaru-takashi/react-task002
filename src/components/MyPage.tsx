import React, { useEffect, useReducer, useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LogIn, { nameId }  from "./LogIn";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserInfo, users } from "../dummy/user-dummy-model";

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

const names = nameId;

export const MyPage = (props: Infos) => {
  const [state, setState] = useState(props); //オブジェクトを渡すことが可能
  const { name, inputAmount, balance } = state;

  const theme = createTheme();
  const unCreatable =
    inputAmount.toString() === NaN.toString() || inputAmount.toString() === "0";

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
    const result: boolean = window.confirm(`${inputAmount}円入金されますか。`);

    if (result) {
      if (inputAmount <= 500000) {
        setState({ balance: balance + inputAmount, name, inputAmount: NaN });

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
        setState({ balance: balance - inputAmount, name, inputAmount: NaN });
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
          setState({ balance, name, inputAmount: NaN });
        }
      }
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
    // console.log(tradingList);
  }, [state, name, inputAmount, balance, tradingList]);

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
    setState({ balance: balancePast(), name, inputAmount: NaN });
  }, []);


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <AccountBalanceIcon sx={{ mr: 2, }} />
            <Typography variant="h6" color="inherit" noWrap>
              MY PAGE
            </Typography>
            <LogoutIcon sx={{ ml: 10, }} />

          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <h1>
        {names}さん、残高{balance}円です。
      </h1>
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
