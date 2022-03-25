import React from "react";

import ChatList from "./ChatList";
import {IMessages} from "./interfaces";



const Chat: React.FC = () => {
    const messages: Array<IMessages> = [];
    return (
        <div className="chat-box-wrapper">
            <ChatList messages={messages} />
        </div>
    )
}

export default Chat;