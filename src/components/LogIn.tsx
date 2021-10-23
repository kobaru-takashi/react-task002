import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { RootState } from "../app/store";
import { userInfoList } from "../User/UserInfoList";

const logInId = "kobaru";
const logInPass = "kobaru";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const theme = createTheme();
  const { userInfo } = useSelector((state: RootState) => state.userInfo);

  console.log("LogIn-userInfo", userInfo);
  console.log("userInfos-LogIn", userInfoList);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    //ダミーデータ
    if (logInId === email && logInPass === password) {
      dispatch(push("/LogIn/myPage"));
    }

    if (userInfo.email === email && userInfo.password === password) {
      dispatch(push("/LogIn/myPage"));
    } else {
      window.alert(
        "Email または Password が間違っています。もう一度入力をして下さい。"
      );
    }

    // const result = userInfoList.some((v) => {
    //   return v.userInfo.email === email && v.userInfo.password === password;
    // });

    // if (result) {
    //   dispatch(push("/LogIn/myPage"));
    // } else {
    //   window.alert(
    //     "Email または Password が間違っています。もう一度入力をして下さい。"
    //   );
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
