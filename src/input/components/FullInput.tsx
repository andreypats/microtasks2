import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string)=>void
}

export function FullInput(props: FullInputPropsType) {

    let[title,setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)      // currentTarget.value - отслеживает введенное значение
    }

    const onClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div className="FullInput">
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickHandler}>+</button>
        </div>
    );
}

