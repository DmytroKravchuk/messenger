import React, {FC} from "react";
import Input from "antd/lib/input";
import {MenuOutlined} from "@ant-design/icons";

const AsideHeader: FC = () => {
    return (
        <div className="aside-header flex align-center space-between m-b-10">
            <MenuOutlined />
            <Input placeholder="Search"/>
        </div>
    )
}

export default AsideHeader;