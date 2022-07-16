import "./styles.scss";

import Text from "antd/lib/typography/Text";
import React, { FC, useState } from "react";
import { FormattedMessage } from "react-intl";

import { useAppSelector } from "../../hooks/redux";
import { ChatItem } from "./chat-item";
import { IContactParams } from "./types";

export const Chats: FC<IContactParams> = ({
  user,
  setActiveUserId,
  activeUserId,
  searchValue,
}) => {
  const { users } = useAppSelector((state) => state.userReducer);
  const [contacts, setContacts] = useState([user]);

  return (
    <div className='contacts'>
      {contacts.map((data) => (
        <ChatItem
          data={data}
          key={data.id}
          setActiveUserId={setActiveUserId}
          activeUserId={activeUserId}
          isOwn
        />
      ))}
      {users.length && searchValue ? (
        <>
          <Text type='secondary' className='p-y-5 p-x-10 flex global-text'>
            <FormattedMessage id='global-search' />
          </Text>
          {users
            .filter(({ id }) => id !== user.id)
            .map((data) => (
              <ChatItem
                data={data}
                // @ts-ignore
                key={data?.id}
                setActiveUserId={setActiveUserId}
                activeUserId={activeUserId}
              />
            ))}
        </>
      ) : null}
    </div>
  );
};
