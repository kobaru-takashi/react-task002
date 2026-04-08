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
import { RootState } from "../../../app/store";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../../slice/login-slice";
// import { signupAction } from "../slice/signup-slice";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = createTheme();
  const { signupInfo } = useSelector((state: RootState) => state);
  console.log("LogInPage、signup情報", signupInfo);

  const handleClickHome = () => {
    history.push("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    const result = signupInfo.find(
      (v) => v.info.email === email && v.info.password === password
    );

    if (result) {
      dispatch(
        loginAction.userLogin({
          info: {
            firstName:result.info.firstName,
            lastName:result.info.lastName,
            email:result.info.email,
            password:result.info.password,
            nickname:result.info.nickname,
          }
        })
      );
      dispatch(push("/LogIn/myPage"));
    } else {
      window.alert(
        "Email または Password が間違っています。もう一度入力をして下さい。"
      );
    }

    console.log("LogIn-userInfo", signupInfo);
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
            Log in
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
              <h1>ホームへ戻る。</h1>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickHome}
              >
                Home
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
