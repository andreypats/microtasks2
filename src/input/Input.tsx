import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {SecondInput} from "./components/SecondInput";
import {Button} from "./components/Button";

export function Input() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let[title,setTitle] = useState('')

    const addMessage = (title: string) => {

        let newMessage = {message: title}
        setMessage([newMessage, ...message])

    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="Input">
            <SecondInput title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

