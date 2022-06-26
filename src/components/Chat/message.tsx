import { Col, Row } from "antd";
import React from "react";

import { IMessages } from "../../interfaces/IChat";

type Props = {
  message?: IMessages;
};

const Message = ({ message }: Props) => {
  return (
    <Row>
      <Col span={20}>
        {message?.author ? <p>{message?.author}</p> : null}
        {message?.text ? <p>{message?.text}</p> : null}
      </Col>
    </Row>
  );
};

export default Message;
