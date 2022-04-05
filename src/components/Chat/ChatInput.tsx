import React, {useState} from "react";
import Input from 'antd/lib/input';
import {IChatInput} from "../interfaces/chat";

const ChatInput: React.FC<IChatInput> = props => {
    const {onAdd} = props;
    const [value, setValue] = useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitHandler = (e: React.KeyboardEvent) => {
        const text = value.trim();
        if (e.key === "Enter" && text) {
            onAdd({
                id: 3,
                author:"Dima",
                text,
                outgoing: true
            })
            setValue("");
        }
    }

    return (
        <Input size="large" placeholder="Write a message..." value={value} onChange={changeHandler} onKeyPress={submitHandler}/>
    )
}

export default ChatInput