import { Input } from "antd";
import React, { useState } from "react";

import { IChatInput } from "../../interfaces/IChat";
import { IUser } from "../../interfaces/IUser";

interface Props extends IChatInput {
  user: IUser;
}

const ChatInput: React.FC<Props> = ({ onAdd, user }) => {
  const { firstName, secondName } = user;
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.KeyboardEvent) => {
    const message = value.trim();
    if (e.key === "Enter" && message) {
      onAdd({
        _id: "",
        author: `${firstName} ${secondName}`,
        message,
      });
      setValue("");
    }
  };

  return (
    <Input
      size='large'
      placeholder='Write a message...'
      value={value}
      onChange={changeHandler}
      onKeyPress={submitHandler}
    />
  );
};

export default ChatInput;
