import React from "react";

type  FilterType = 'all' | 'dollar' | 'ruble'

type NewComponentPropsType = {
    currentMoney: Array<MoneyPropsType>
    onClickFilterHandler: (click: FilterType)=>void
}

type MoneyPropsType = {
    banknots: string,
    value: number,
    number: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div className="NewComponent">
            <ul>
                {props.currentMoney.map((obj, index) => {
                    return (
                        <li key={index}>
                            <span>{obj.banknots}</span>
                            <span>{obj.value}</span>
                            <span>{obj.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>rubls</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </div>
    )
}