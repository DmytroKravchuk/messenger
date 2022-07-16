import React, { FC, useState } from "react";

import { IUser } from "../../interfaces/IUser";
import { Chats } from "../chats/chats";
import { AsideHeader } from "./AsideHeader/aside-header";

type Props = {
  user: IUser;
  setActiveUserId: (value: string | number) => void;
  activeUserId: string | number;
};

export const Sidebar: FC<Props> = ({ user, setActiveUserId, activeUserId }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <aside className='h-100 p-y-10'>
      <AsideHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <Chats
        user={user}
        setActiveUserId={setActiveUserId}
        activeUserId={activeUserId}
        searchValue={searchValue}
      />
    </aside>
  );
};
