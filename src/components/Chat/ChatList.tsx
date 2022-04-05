import React from "react";
import {IMessages} from "../interfaces/chat";
import Message from "./Message";

import "./style.scss";

type Props = {
    messages?: Array<IMessages>;
};

const ChatList = ({messages}: Props) => {
    return (
        <div className="chat-box p-b-10">
            {messages?.map(message => (
                <Message message={message} key={message.id}/>
            ))}
        </div>
    )
}

export default ChatList;