import React, { useState } from "react";

import { IMessages, IMessagesResponse } from "../../interfaces/IChat";
import { IUser } from "../../interfaces/IUser";
import ChatInput from "./chat-input";
import ChatList from "./chat-list";

type Props = {
  user: IUser;
};

export const ChatBox: React.FC<Props> = ({ user }) => {
  const [messages, setMessages] = useState<IMessagesResponse[]>([]);

  const onAdd = (obj: IMessages) => {
    console.log(obj);
    // setMessages((prev) => [...prev, obj]);
  };

  return (
    <div className='chat-box-wrapper p-10'>
      <ChatList messages={messages} />
      <ChatInput onAdd={onAdd} user={user} />
    </div>
  );
};
