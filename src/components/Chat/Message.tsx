import React from "react";
import {IMessages} from "../interfaces/chat";
import Row from "antd/lib/Row";
import Col from "antd/lib/Col";

type Props = {
    message?: IMessages;
};

const Message = ({message}: Props) => {
    const {outgoing, author, text} = message!;

    return (
        <Row justify={outgoing ? "end" : "start"}>
            <Col span={20}>
                {!outgoing && <p>{author}</p>}
                <p>{text}</p>
            </Col>
        </Row>
    )
}

export default Message;