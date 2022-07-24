import React, {useState} from 'react';

export function Filter() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    return (
        <div className="Filter">
            <ul>
                 {money.map((obj:{banknots: string, value: number, number: string}, index) => {
                        return (
                            <li key={index}>
                                <span>{obj.banknots}</span>
                                <span>{obj.value}</span>
                                <span>{obj.number}</span>
                            </li>
                        )
                 })}
            </ul>
        </div>
    );
}

