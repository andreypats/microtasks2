//import React,{MouseEvent} from "react";
import {Click} from "./components/Click";

export function Button() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('I am Stupid BUTTON')
    }

    return (
        <div className="Button">
            <Click name={'YouTube-1'} callBack={()=>Button1Foo ('Hello, i am Andrey,', 24, 'Minsk')}/>
            <Click name={'YouTube-2'} callBack={()=>Button2Foo('Hello, i am Maksim,')}/>
            <Click name={'Stupid BUTTON'} callBack={Button3Foo}/>
        </div>
    )

}

/*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello, i am Andrey')
    }

    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello, i am Maksim')
    };*/

/*const onClickHandler = (name: string) => {
    console.log(name)
}*/

/*const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('100200')
}

const foo2 = (name: number) => {
    console.log(name)
}*/

/*return (
    <div className="Button">
        <button onClick={(event) => onClickHandler ('Andrey')}>Button</button>
        <button onClick={(event) => onClickHandler ('Maksim')}>2Button2</button>

        <button onClick={foo1}>11111</button>
        <button onClick={(event: MouseEvent<HTMLButtonElement>)=>foo2(200300)}>22222</button>
    </div>
);*/
