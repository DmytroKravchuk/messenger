import Col from "antd/lib/Col";
import Row from "antd/lib/Row";
import React, { FC } from "react";

import { IUser } from "../../interfaces/IUser";

type Props = {
  data: IUser;
  setActiveUserId: (value: string | number) => void;
  activeUserId: string | number;
};

export const ContactItem: FC<Props> = ({
  data,
  setActiveUserId,
  activeUserId,
}) => {
  const { id, avatar, messages, unreadCountMessages } = data;
  const handleActiveChatId = (id: string | number) => () => setActiveUserId(id);
  const activeClass = id === activeUserId ? "active" : undefined;

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
          <div className='avatar'>SV</div>
        )}
        <div className='contact-info'>
          <div className='title'>Saved Message</div>
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
