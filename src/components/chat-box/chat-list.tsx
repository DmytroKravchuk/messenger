import "./style.scss";

import React from "react";

import { IMessagesResponse } from "../../interfaces/IChat";
import Message from "./message";

type Props = {
  messages?: Array<IMessagesResponse>;
};

const ChatList = ({ messages }: Props) => {
  return (
    <div className='chat-box p-b-10'>
      {messages?.map((message) => (
        <Message message={message} key={message._id} />
      ))}
    </div>
  );
};

export default ChatList;
