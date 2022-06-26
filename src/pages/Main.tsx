import "./style.scss";

import { Spin } from "antd";
import React, { FC, useEffect, useState } from "react";

import { Chat, LoginForm } from "../components";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { checkAuth } from "../store/reducers/auth/ActionCreators";

export const Main: FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(true);
  const [activeUserId, setActiveUserId] = useState<string | number>("");

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

  if (isAuth) {
    return (
      <div className='h-100 flex main-page'>
        <Sidebar
          user={user}
          setActiveUserId={setActiveUserId}
          activeUserId={activeUserId}
        />
        {activeUserId ? (
          <main className='h-100 main-content'>
            <Chat />
          </main>
        ) : null}
      </div>
    );
  }

  return <LoginForm />;
};
