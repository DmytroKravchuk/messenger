import "./style.scss";

import Spin from "antd/lib/spin";
import React, { FC, useEffect, useState } from "react";

import { AsideHeader, Chat, LoginForm, Ontacts } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { checkAuth } from "../store/reducers/auth/ActionCreators";

export const Main: FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
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

  if (isAuth) {
    return (
      <div className='h-100 flex main-page'>
        <aside className='h-100 p-10'>
          <AsideHeader />
          <Ontacts users={[user]} />
        </aside>
        <main className='h-100 main-content'>
          <Chat />
        </main>
      </div>
    );
  }

  return <LoginForm />;
};
