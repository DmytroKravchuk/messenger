import Col from "antd/lib/Col";
import Row from "antd/lib/Row";
import React from "react";

import { IMessages } from "../../interfaces/IChat";

type Props = {
  message?: IMessages;
};

const Message = ({ message }: Props) => {
  const { outgoing, author, text } = message!;

  return (
    <Row justify={outgoing ? "end" : "start"}>
      <Col span={20}>
        {!outgoing && <p>{author}</p>}
        <p>{text}</p>
      </Col>
    </Row>
  );
};

export default Message;
