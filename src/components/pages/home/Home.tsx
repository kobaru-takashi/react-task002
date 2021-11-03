import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Home = () => {
  const theme = createTheme();
  const history = useHistory();
  const handleClick = () => {
    history.push("/SignUp");
  };
  const handleClickLogIn = () => {
    history.push("/LogIn");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>
              登録画面へ進む場合は、
              <br />
              ボタンを押して下さい。
            </h1>
            <Button variant="contained" color="secondary" onClick={handleClick}>
            SignUp
            </Button>
            <br />
            <br />
            <h1>
              ログイン画面進む場合は、
              <br />
              ボタンを押して下さい。
            </h1>
            <Button variant="contained" color="secondary" onClick={handleClickLogIn}>
              LogIn
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};