import "./login-form.scss";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Text from "antd/lib/typography/Text";
import React, { FC, useState } from "react";
import { FormattedMessage } from "react-intl";

import { useAppDispatch } from "../../hooks/redux";
import { login, registration } from "../../store/reducers/auth/ActionCreators";

type FormProps = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  secondName: string;
};

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const [isRegistrationForm, setRegistrationForm] = useState<boolean>(false);

  const passwordIcon = (visible: boolean) =>
    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;

  const submitHandler = (formValue: FormProps) => {
    if (isRegistrationForm) {
      dispatch(registration(formValue));
    } else {
      const { email, password } = formValue;
      dispatch(login({ email, password }));
    }
  };

  const handleSwitchForm = (type: boolean) => () => setRegistrationForm(type);

  return (
    <div className='login-form-wrapper'>
      <Form className='login-form' onFinish={submitHandler}>
        {isRegistrationForm ? (
          <>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder='First Name' />
            </Form.Item>
            <Form.Item
              name='secondName'
              rules={[
                {
                  required: true,
                  message: "Please input your second name!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder='Second Name' />
            </Form.Item>
          </>
        ) : null}
        <Form.Item
          name='email'
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder='Password'
            iconRender={passwordIcon}
            autoComplete='on'
          />
        </Form.Item>
        {isRegistrationForm ? (
          <Form.Item
            name='confirmPassword'
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder='Confirm password'
              iconRender={passwordIcon}
              autoComplete='on'
            />
          </Form.Item>
        ) : null}
        <Form.Item>
          {!isRegistrationForm ? (
            <>
              <Button type='primary' htmlType='submit' className='m-r-10'>
                <FormattedMessage id='login' />
              </Button>
              <Text>
                <FormattedMessage id='sign-up.question' />
                <Button type='link' onClick={handleSwitchForm(true)}>
                  <FormattedMessage id='sign-up' />
                </Button>
              </Text>
            </>
          ) : null}
          {isRegistrationForm ? (
            <>
              <Button type='primary' htmlType='submit' className='m-r-10'>
                <FormattedMessage id='sign-up' />
              </Button>
              <Text>
                <FormattedMessage id='login.question' />
                <Button type='link' onClick={handleSwitchForm(false)}>
                  <FormattedMessage id='login' />
                </Button>
              </Text>
            </>
          ) : null}
        </Form.Item>
      </Form>
    </div>
  );
};
