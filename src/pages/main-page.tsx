import React, { FC, useEffect, useMemo, useState } from "react";

import { ChatBox } from "../components";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useAppSelector } from "../hooks/redux";
import { WS_URL } from "../http";

export const MainPage: FC = () => {
  const socket = useMemo(() => new WebSocket(WS_URL), []);
  const { user } = useAppSelector((state) => state.authReducer);

  const [activeUserId, setActiveUserId] = useState<string | number>("");

  socket.onopen = () => {
    console.log("[open] WS connection success");
  };

  useEffect(() => {
    return () => {
      console.log("[close] WS connection closed");
      socket.close(1000, "chat was closed");
    };
  }, [socket]);

  return (
    <div className='h-100 flex main-page'>
      <Sidebar
        user={user}
        setActiveUserId={setActiveUserId}
        activeUserId={activeUserId}
      />
      {activeUserId ? (
        <main className='h-100 main-content'>
          <ChatBox />
        </main>
      ) : null}
    </div>
  );
};
