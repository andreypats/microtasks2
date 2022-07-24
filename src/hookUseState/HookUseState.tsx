import React, {useState} from 'react';

export function HookUseState() {

    //let a = 1
    let[a,setA] = useState(1)// a - это состояние, setA - это функция, которая использует состояние a


    const onclickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onclickHandler2 = () => {
        setA(a=0)
        console.log(a)
    }

    return (
        <div className="HookUseState">
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler2}>0</button>
        </div>
    );
}