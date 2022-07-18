import { Col, Row } from "antd";
import React from "react";

import { IMessagesResponse } from "../../interfaces/IChat";

type Props = {
  message: IMessagesResponse;
};

const Message = ({ message }: Props) => {
  return (
    <Row>
      <Col span={20}>
        <p>{message.author}</p>
        <p>{message.message}</p>
      </Col>
    </Row>
  );
};

export default Message;
