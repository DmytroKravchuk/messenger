import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import React, { FC, useState } from "react";

import { useAppDispatch } from "../../hooks/redux";
import { login, registration } from "../../store/reducers/auth/ActionCreators";

type RegistrationProps = {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  secondName: string;
};

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const [formValue, setFormValue] = useState<RegistrationProps>({
    email: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    secondName: "",
  });

  const [isRegistration, setRegistration] = useState<boolean>(false);

  const changeHandler =
    (param: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormValue((state) => ({ ...state, [param]: e.target.value }));

  const submitHandler = () => {
    if (isRegistration) {
      dispatch(registration(formValue));
    } else {
      const { email, password } = formValue;
      dispatch(login({ email, password }));
    }
  };

  const passwordIcon = (visible: boolean) =>
    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;

  return (
    <Form className='login-form' onFinish={submitHandler}>
      {isRegistration ? (
        <>
          <Input
            placeholder='First Name'
            value={formValue.firstName}
            onChange={changeHandler("firstName")}
          />
          <Input
            placeholder='Second Name'
            value={formValue.secondName}
            onChange={changeHandler("secondName")}
          />
        </>
      ) : null}
      <Form.Item>
        <Input
          placeholder='Email'
          value={formValue.email}
          onChange={changeHandler("email")}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          placeholder='Password'
          iconRender={passwordIcon}
          value={formValue.password}
          onChange={changeHandler("password")}
          autoComplete='on'
        />
      </Form.Item>
      {isRegistration ? (
        <Form.Item>
          <Input.Password
            placeholder='Password'
            iconRender={passwordIcon}
            value={formValue.repeatPassword}
            onChange={changeHandler("repeatPassword")}
            autoComplete='on'
          />
        </Form.Item>
      ) : null}
      <Form.Item>
        {!isRegistration ? (
          <Button type='primary' htmlType='submit'>
            login
          </Button>
        ) : null}
        {isRegistration ? (
          <Button type='primary' htmlType='submit'>
            registration
          </Button>
        ) : null}
      </Form.Item>
    </Form>
  );
};
