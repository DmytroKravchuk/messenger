import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getUsers } from "../store/reducers/users/ActionCreators";

export const UsersPage: FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userReducer);
  useEffect(() => {
    // dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      {users.map(({ id }) => (
        <div key={id}>12</div>
      ))}
    </div>
  );
};
