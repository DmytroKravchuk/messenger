import React, {FC, useState} from "react";
import Space from 'antd/lib/space';
import Input from 'antd/lib/input';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {Button} from "antd";

import {useAppDispatch} from "../../hooks/redux";
import {login, registration} from "../../store/reducers/auth/ActionCreators";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const changeHandler = (func: Function) => (e: React.ChangeEvent<HTMLInputElement>) => func(e.target.value);

    const authHandler = (func: Function) => () => dispatch(func({email, password}));

    return (
        <div className="login-form">
            <Space direction="vertical">
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={changeHandler(setEmail)}
                />
                <Input.Password
                    placeholder="Password"
                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    value={password}
                    onChange={changeHandler(setPassword)}
                />
                <Button type="primary" onClick={authHandler(login)}>login</Button>
                <Button type="primary" onClick={authHandler(registration)}>registration</Button>
            </Space>
        </div>
    )
}

export default LoginForm;