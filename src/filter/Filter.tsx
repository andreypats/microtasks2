import React, {useState} from 'react';

export function Filter() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')

    const onClickFilterHandler = (banknots: string) => {
        console.log(banknots)
    }

    return (
        <div className="Filter">
            <ul>
                {currentMoney.map((obj: { banknots: string, value: number, number: string }, index) => {
                    return (
                        <li key={index}>
                            <span>{obj.banknots}</span>
                            <span>{obj.value}</span>
                            <span>{obj.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={(event) => onClickFilterHandler('all')}>all</button>
                <button onClick={(event) => onClickFilterHandler('rubls')}>rubls</button>
                <button onClick={(event) => onClickFilterHandler('dollars')}>dollars</button>
            </div>
        </div>
    );
}

//15:32

