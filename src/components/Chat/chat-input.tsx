import Input from "antd/lib/input";
import React, { useState } from "react";

import { IChatInput } from "../../interfaces/IChat";

const ChatInput: React.FC<IChatInput> = (props) => {
  const { onAdd } = props;
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.KeyboardEvent) => {
    const text = value.trim();
    if (e.key === "Enter" && text) {
      onAdd({
        id: 3,
        author: "Dima",
        text,
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
