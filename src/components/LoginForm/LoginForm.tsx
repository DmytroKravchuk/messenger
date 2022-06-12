import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Space from "antd/lib/space";
import React, { FC, useState } from "react";

import { useAppDispatch } from "../../hooks/redux";
import { login, registration } from "../../store/reducers/auth/ActionCreators";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [isRegistration, setRegistration] = useState<boolean>(false);

  const changeHandler =
    (func: Function) => (e: React.ChangeEvent<HTMLInputElement>) =>
      func(e.target.value);

  const authHandler = (func: Function) => dispatch(func({ email, password }));

  const submitHandler = () => {
    if (isRegistration) {
      authHandler(registration);
    } else {
      authHandler(login);
    }
  };

  return (
    <Form className='login-form' onFinish={submitHandler}>
      {isRegistration ? (
        <>
          <Input
            placeholder='First Name'
            value={firstName}
            onChange={changeHandler(setFirstName)}
          />
          <Input
            placeholder='Second Name'
            value={secondName}
            onChange={changeHandler(setSecondName)}
          />
        </>
      ) : null}
      <Form.Item>
        <Input
          placeholder='Email'
          value={email}
          onChange={changeHandler(setEmail)}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          placeholder='Password'
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          value={password}
          onChange={changeHandler(setPassword)}
          autoComplete='on'
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          login
        </Button>
        <Button type='primary' htmlType='submit'>
          registration
        </Button>
      </Form.Item>
    </Form>
  );
};
