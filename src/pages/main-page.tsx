import React, { FC, useMemo, useState } from "react";

import { ChatBox } from "../components";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useAppSelector } from "../hooks/redux";
import { WS_URL } from "../http";
import { IMessages, IRoom } from "../interfaces/IChat";

export const MainPage: FC = () => {
  const socket = useMemo(() => new WebSocket(WS_URL), []);
  const { user, rooms } = useAppSelector((state) => state.authReducer);

  const [activeRoom, setActiveRoom] = useState<IRoom | null>(null);

  socket.onopen = () => {
    console.log("[open] WS connection success");
  };

  socket.onmessage = (msg: MessageEvent) => {
    console.log(msg.data);
  };

  const onAdd = (message: IMessages) => {
    if (activeRoom) {
      socket.send(JSON.stringify({ roomId: activeRoom._id, message }));
    }
  };

  return (
    <div className='h-100 flex main-page'>
      <Sidebar
        user={user}
        rooms={rooms}
        setActiveRoom={setActiveRoom}
        activeRoom={activeRoom}
      />
      {activeRoom ? (
        <main className='h-100 main-content'>
          <ChatBox user={user} onAdd={onAdd} activeRoom={activeRoom} />
        </main>
      ) : null}
    </div>
  );
};
