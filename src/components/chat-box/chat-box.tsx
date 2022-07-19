import React from "react";

import { IMessages, IRoom } from "../../interfaces/IChat";
import { IUser } from "../../interfaces/IUser";
import ChatInput from "./chat-input";
import ChatList from "./chat-list";

type Props = {
  activeRoom: IRoom;
  user: IUser;
  onAdd: (value: IMessages) => void;
};

export const ChatBox: React.FC<Props> = ({ user, onAdd, activeRoom }) => {
  return (
    <div className='chat-box-wrapper p-10'>
      <ChatList messages={activeRoom.messages} />
      <ChatInput onAdd={onAdd} user={user} />
    </div>
  );
};
