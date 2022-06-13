import "./style.scss";

import React, { FC } from "react";

import { Router } from "./router/Router";
import { useTheme } from "./ThemeProvider";

const App: FC = () => {
  const { themeValue } = useTheme();
  return (
    <div className='app' style={{ ...themeValue }}>
      <Router />
    </div>
  );
};

export default App;
