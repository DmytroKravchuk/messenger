import "./styles.scss";

import React, { FC } from "react";

import { ContactItem } from "./contact-item";
import { IContactParams } from "./types";

export const Contacts: FC<IContactParams> = ({
  contacts,
  setActiveUserId,
  activeUserId,
}) => {
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
    </div>
  );
};
