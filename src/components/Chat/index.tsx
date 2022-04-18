import React, {useState} from "react";

import ChatList from "./ChatList";
import {IMessages} from "../../interfaces/chat";
import ChatInput from "./ChatInput";



const Chat: React.FC = () => {
    const [messages, setMessages] = useState<IMessages[]>([])

    const onAdd = (obj: IMessages) => {
        setMessages(prev => [...prev, obj])
    }

    return (
        <div className="chat-box-wrapper p-10">
            <ChatList messages={messages} />
            <ChatInput onAdd={onAdd} />
        </div>
    )
}

export default Chat;