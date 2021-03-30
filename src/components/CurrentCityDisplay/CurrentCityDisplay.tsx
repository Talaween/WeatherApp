import React from 'react';
import {Card} from 'antd';
import './CurrentCityDisplay.css';

export interface CityProps {
    name: string;
    temp: number | undefined;
    state: string | undefined;
}
export const City:React.FC<CityProps> = ({name, state, temp}:CityProps) => {

    return  <Card title={name} style={{ width: 300 }}>
        <p>{'Current Weather State is:'}  <span className="bold">{state}</span></p>
        <p>{'Current Temperature is:'} <span className="bold">{temp}</span> </p>
    </Card>;
}