import React, {ChangeEvent} from 'react';

type SecondInputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const SecondInput = (props: SecondInputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)      // currentTarget.value - отслеживает введенное значение
    }

    return (
        <div className="SecondInput">
            <input value={props.title} onChange={onChangeInputHandler} />
        </div>
    );
};
