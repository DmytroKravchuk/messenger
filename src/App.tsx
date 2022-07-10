import "./style.scss";

import { Spin } from "antd";
import React, { FC, useEffect, useState } from "react";

import { useTheme } from "./context/theme-context";
import { useAppDispatch } from "./hooks/redux";
import { Router } from "./router/Router";
import { checkAuth } from "./store/reducers/auth/ActionCreators";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { themeValue } = useTheme();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth()).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='main-loader'>
        <Spin />
      </div>
    );
  }

  return (
    <div className='app' style={{ ...themeValue }}>
      <Router />
    </div>
  );
};

export default App;
