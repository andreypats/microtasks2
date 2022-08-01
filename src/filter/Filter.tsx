import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export function Filter() {

    type  FilterType = 'all' | 'dollar' | 'ruble'

    let [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    let onClickFilterHandler = (click: FilterType) => {
        setFilter(click)
    }

    return (
            <div className="Filter">
                <NewComponent
                    currentMoney={currentMoney}
                    onClickFilterHandler={onClickFilterHandler}
                />
            </div>
    );
}

