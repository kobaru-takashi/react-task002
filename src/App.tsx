import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

// routerを切り分ける
// ルダックスがそのうち使う
// パスは定数にしておく。
//  <Link to="/Page2">PAge2</Link>
//

export function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/LogIn">LogIn</Link>
          <br />
          <Link to="/Page2">PAge2</Link>
          <br />
          <Link to="/">MyPage</Link>
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
