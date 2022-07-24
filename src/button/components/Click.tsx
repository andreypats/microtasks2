import React from "react";

type ClickType = {
    name: string
    callBack: ()=>void
}

type callBackType = {
    void: string
}

export const Click = (props: ClickType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div className="Click">
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )


}