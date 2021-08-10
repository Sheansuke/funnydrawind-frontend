import "./wdyr";
import ReactDOM from "react-dom";
import "./index.css";

import { store } from "@redux/store";
import { Provider } from "react-redux";

// app
import { App } from "./App";

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
