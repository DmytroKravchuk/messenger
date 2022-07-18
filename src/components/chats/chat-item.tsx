import { Col, Row } from "antd";
import React, { FC } from "react";

import { IRoom } from "../../interfaces/IChat";

type Props = {
  data: IRoom;
  setActiveRoom: (value: IRoom) => void;
  activeRoom: IRoom | null;
};

export const ChatItem: FC<Props> = ({ data, setActiveRoom, activeRoom }) => {
  const { _id, name, avatar, messages, unreadCountMessages } = data;
  const handleActiveRoom = (data: IRoom) => () => setActiveRoom(data);
  const activeClass = _id === activeRoom?._id ? "active" : undefined;

  const convertedAvatar = "";

  const roomNameArr = name.split(" ");
  const firstAbbreviationName = Array.from(roomNameArr[0])[0];
  const secondAbbreviationName = Array.from(roomNameArr[1])[0];

  return (
    <Row
      gutter={[0, 5]}
      onClick={handleActiveRoom(data)}
      className={activeClass}
    >
      <Col span={24} className='contact-info-wrapper'>
        {avatar ? (
          <img src={convertedAvatar} alt='avatar' className='avatar' />
        ) : (
          <div className='avatar'>
            {`${firstAbbreviationName}${secondAbbreviationName}`}
          </div>
        )}
        <div className='contact-info'>
          <div className='title'>{name}</div>
          <div className='message-wrapper'>
            {messages && messages[0] ? (
              <span className='message'>{messages[messages.length - 1]}</span>
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
