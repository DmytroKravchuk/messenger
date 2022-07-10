import React, { FC, useState } from "react";

import { Chat } from "../components";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useAppSelector } from "../hooks/redux";

export const MainPage: FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);

  const [activeUserId, setActiveUserId] = useState<string | number>("");

  return (
    <div className='h-100 flex main-page'>
      <Sidebar
        user={user}
        setActiveUserId={setActiveUserId}
        activeUserId={activeUserId}
      />
      {activeUserId ? (
        <main className='h-100 main-content'>
          <Chat />
        </main>
      ) : null}
    </div>
  );
};
