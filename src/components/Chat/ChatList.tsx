import React from "react";
import {IMessages} from "./interfaces";

import "./style.scss";

type Props = {
    messages?: Array<IMessages>;
};

const ChatList = ({ messages }: Props) => {
    console.log(messages)
    return (
        <div>ChatList</div>
    )
}

export default ChatList;