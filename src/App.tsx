import { Router } from "./router/Router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./app/store";

export function App() {
  return (
    <>
      <div className="App">
        <ConnectedRouter history={history}>{Router}</ConnectedRouter>
      </div>
    </>
  );
}

export default App;
