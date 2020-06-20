import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ResetStyles } from "./styles";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
