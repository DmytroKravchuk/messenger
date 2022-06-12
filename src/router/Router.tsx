import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Main, Users } from "../pages";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='users' element={<Users />} />
    </Routes>
  );
};
