import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}


export const Button = (props: ButtonPropsType) => {

    const onClickButtonHundler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickButtonHundler}>{props.name}</button>
        </div>
    );
};
