import "./styles.scss";

import Text from "antd/lib/typography/Text";
import React, { FC, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import { useAppSelector } from "../../hooks/redux";
import { IChatSearchParams } from "../../interfaces/IChat";
import { ChatItem } from "./chat-item";

export const Chats: FC<IChatSearchParams> = ({
  user,
  setActiveRoom,
  activeRoom,
  searchValue,
}) => {
  const { users } = useAppSelector((state) => state.userReducer);

  const filteredUsers = useMemo(
    () => users.filter(({ _id }) => _id !== user._id),
    [user._id, users],
  );

  return (
    <div className='contacts'>
      {user.rooms.map((data) => (
        <ChatItem
          data={data}
          key={data._id}
          setActiveRoom={setActiveRoom}
          activeRoom={activeRoom}
        />
      ))}
      {filteredUsers.length && searchValue ? (
        <>
          <Text type='secondary' className='p-y-5 p-x-10 flex global-text'>
            <FormattedMessage id='global-search' />
          </Text>
          {filteredUsers.map((data) => (
            <ChatItem
              data={data}
              // @ts-ignore
              key={data?._id}
              setActiveRoom={setActiveRoom}
              activeRoom={activeRoom}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};
