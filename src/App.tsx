import "./style.scss";

import React, { FC } from "react";

import { Router } from "./router/Router";

const App: FC = () => (
  <div className='app'>
    <Router />
  </div>
);

export default App;
