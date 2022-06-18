import { MenuOutlined } from "@ant-design/icons";
import Input from "antd/lib/input";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

import { useAppDispatch } from "../../../hooks/redux";
import { useDebounce } from "../../../hooks/useDelay";
import { getUsers } from "../../../store/reducers/users/ActionCreators";

export const AsideHeader: FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string | null>(null);

  const searchValue = useDebounce(value, 1000);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      dispatch(getUsers({ search: searchValue }));
    }
  }, [dispatch, searchValue]);

  return (
    <div className='aside-header flex align-center space-between m-b-20 p-x-10'>
      <MenuOutlined />
      <Input placeholder='Search' onChange={changeHandler} />
    </div>
  );
};
