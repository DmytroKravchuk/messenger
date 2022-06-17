import "./styles.scss";

import Col from "antd/lib/Col";
import Row from "antd/lib/Row";
import React, { FC } from "react";

import { IUser } from "../../interfaces/IUser";

interface Props {
  users: Array<IUser>;
}

export const Ontacts: FC<Props> = ({ users }) => {
  return (
    <div className='contacts'>
      {users.map(({ id, avatar, unreadCountMessages, messages }: IUser) => (
        <Row key={id} gutter={[0, 5]}>
          <Col key={id} span={24} className='contact-info-wrapper'>
            {avatar ? (
              <img src='' alt='avatar' className='avatar' />
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
      ))}
    </div>
  );
};
