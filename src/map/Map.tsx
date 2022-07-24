import React from 'react';
import {TopCars} from "./TopCars";

export function Map() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
        {manufacturer:'Honda', model:'accord'}
    ]
    return (
        <div className="Map">
            <TopCars cars={topCars}/>
        </div>
    );
}

