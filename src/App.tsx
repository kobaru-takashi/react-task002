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
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
