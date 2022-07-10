import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LOGIN_ROUTE, MAIN_PAGE_ROUTE } from "../contstants";
import { useAppSelector } from "../hooks/redux";
import { privateRoutes, publicRoutes } from "../routes";

export const Router: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </>
      ) : (
        <>
          {publicRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </>
      )}
      <Route
        path='*'
        element={
          isAuth ? (
            <Navigate to={MAIN_PAGE_ROUTE} />
          ) : (
            <Navigate to={LOGIN_ROUTE} />
          )
        }
      />
    </Routes>
  );
};
