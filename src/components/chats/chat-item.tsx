import { Col, Row } from "antd";
import React, { FC } from "react";

import { IUser } from "../../interfaces/IUser";

type Props = {
  data: IUser;
  setActiveUserId: (value: string | number) => void;
  activeUserId: string | number;
  isOwn?: boolean;
};

export const ChatItem: FC<Props> = ({
  data,
  setActiveUserId,
  activeUserId,
  isOwn,
}) => {
  const { id, avatar, messages, unreadCountMessages, firstName, secondName } =
    data;
  const handleActiveChatId = (id: string | number) => () => setActiveUserId(id);
  const activeClass = id === activeUserId ? "active" : undefined;

  const firstAbbreviationName = Array.from(firstName)[0];
  const secondAbbreviationName = Array.from(secondName)[0];

  return (
    <Row
      gutter={[0, 5]}
      onClick={handleActiveChatId(id)}
      className={activeClass}
    >
      <Col span={24} className='contact-info-wrapper'>
        {avatar ? (
          <img src={avatar} alt='avatar' className='avatar' />
        ) : (
          <div className='avatar'>
            {isOwn ? "SV" : `${firstAbbreviationName}${secondAbbreviationName}`}
          </div>
        )}
        <div className='contact-info'>
          <div className='title'>
            {isOwn ? "Saved Message" : `${firstName} ${secondName}`}
          </div>
          <div className='message-wrapper'>
            {messages && messages[0] ? (
              <span className='message'>{messages[0]}</span>
            ) : null}
            {unreadCountMessages && (
              <span className='count'>{unreadCountMessages}</span>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};
