import React, { FC, useState } from "react";

import { IRoom } from "../../interfaces/IChat";
import { IUser } from "../../interfaces/IUser";
import { Chats } from "../chats/chats";
import { AsideHeader } from "./AsideHeader/aside-header";

type Props = {
  user: IUser;
  setActiveRoom: (value: IRoom) => void;
  activeRoom: IRoom | null;
};

export const Sidebar: FC<Props> = ({ user, setActiveRoom, activeRoom }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <aside className='h-100 p-y-10'>
      <AsideHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <Chats
        user={user}
        setActiveRoom={setActiveRoom}
        activeRoom={activeRoom}
        searchValue={searchValue}
      />
    </aside>
  );
};
