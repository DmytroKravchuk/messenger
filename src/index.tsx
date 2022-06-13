import "antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { setupStore } from "./store";
import { ThemeProvider } from "./ThemeProvider";

ReactDOM.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
