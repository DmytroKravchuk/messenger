import { MenuOutlined } from "@ant-design/icons";
import Input from "antd/lib/input";
import React, { ChangeEvent, FC, useEffect } from "react";

import { useAppDispatch } from "../../../hooks/redux";
import { useDebounce } from "../../../hooks/useDelay";
import { getUsers } from "../../../store/reducers/users/ActionCreators";

type Props = {
  searchValue: string | null;
  setSearchValue: (value: string | null) => void;
};
export const AsideHeader: FC<Props> = ({ searchValue, setSearchValue }) => {
  const dispatch = useAppDispatch();

  const value = useDebounce(searchValue, 1000);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (value) {
      dispatch(getUsers({ search: value }));
    }
  }, [dispatch, value]);

  return (
    <div className='aside-header flex align-center space-between m-b-20 p-x-10'>
      <MenuOutlined />
      <Input placeholder='Search' onChange={changeHandler} allowClear />
    </div>
  );
};
