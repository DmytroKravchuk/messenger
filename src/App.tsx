import "./style.scss";

import React, { FC } from "react";

import { useTheme } from "./context/theme-context";
import { Router } from "./router/Router";

const App: FC = () => {
  const { themeValue } = useTheme();
  return (
    <div className='app' style={{ ...themeValue }}>
      <Router />
    </div>
  );
};

export default App;
