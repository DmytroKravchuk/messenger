import React, { useState } from "react";

import { IMessages } from "../../interfaces/IChat";
import ChatInput from "./chat-input";
import ChatList from "./chat-list";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessages[]>([]);

  const onAdd = (obj: IMessages) => {
    setMessages((prev) => [...prev, obj]);
  };

  return (
    <div className='chat-box-wrapper p-10'>
      <ChatList messages={messages} />
      <ChatInput onAdd={onAdd} />
    </div>
  );
};
