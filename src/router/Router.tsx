import React, { FC, FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LOGIN_ROUTE, MAIN_PAGE_ROUTE } from "../contstants";
import { useAppSelector } from "../hooks/redux";
import { privateRoutes, publicRoutes } from "../routes";

type RoutesProps = {
  path: string;
  Component: FunctionComponent;
  children?: RoutesProps[];
};

export const Router: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  const getRoutes = (routes: Array<RoutesProps>) => {
    // ToDo: doesn't work for nested path, need to refactor
    return routes.map((route: RoutesProps) => {
      const { path, Component, children } = route;
      if (children) {
        return (
          <React.Fragment key={path}>
            <Route path={path} element={<route.Component />}>
              {getRoutes(children)}
            </Route>
          </React.Fragment>
        );
      }
      return <Route path={path} element={<Component />} key={path} />;
    });
  };

  return (
    <Routes>
      {isAuth ? getRoutes(privateRoutes) : getRoutes(publicRoutes)}
      <Route
        path='*' // ToDo: doesn't work for nested path, need to refactor
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
