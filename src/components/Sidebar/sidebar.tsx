import React, { FC, useState } from "react";

import { IRoom } from "../../interfaces/IChat";
import { IUser } from "../../interfaces/IUser";
import { Chats } from "../chats/chats";
import { AsideHeader } from "./AsideHeader/aside-header";

type Props = {
  user: IUser;
  rooms: Array<IRoom>;
  setActiveRoom: (value: IRoom) => void;
  activeRoom: IRoom | null;
};

export const Sidebar: FC<Props> = ({
  user,
  rooms,
  setActiveRoom,
  activeRoom,
}) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <div className='h-100 p-y-10 sidebar'>
      <AsideHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <Chats
        user={user}
        rooms={rooms}
        setActiveRoom={setActiveRoom}
        activeRoom={activeRoom}
        searchValue={searchValue}
      />
    </div>
  );
};
