import "./styles.scss";

import Text from "antd/lib/typography/Text";
import React, { FC, useState } from "react";
import { FormattedMessage } from "react-intl";

import { useAppSelector } from "../../hooks/redux";
import { ContactItem } from "./contact-item";
import { IContactParams } from "./types";

export const Contacts: FC<IContactParams> = ({
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
        <ContactItem
          data={data}
          key={data.id}
          setActiveUserId={setActiveUserId}
          activeUserId={activeUserId}
        />
      ))}
      {users.length && searchValue ? (
        <>
          <Text type='secondary' className='p-y-5 p-x-10 flex global-text'>
            <FormattedMessage id='global-search' />
          </Text>
          {users.map((data) => (
            <ContactItem
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
