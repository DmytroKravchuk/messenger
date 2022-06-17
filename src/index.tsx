import "antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { IntlContext } from "./context/intl-context";
import { ThemeProvider } from "./context/theme-context";
import { setupStore } from "./store";

ReactDOM.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <ThemeProvider>
        <IntlContext>
          <App />
        </IntlContext>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
