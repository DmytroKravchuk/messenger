import { MenuOutlined } from "@ant-design/icons";
import Input from "antd/lib/input";
import React, { FC } from "react";

export const AsideHeader: FC = () => {
  return (
    <div className='aside-header flex align-center space-between m-b-20 p-x-10'>
      <MenuOutlined />
      <Input placeholder='Search' />
    </div>
  );
};
