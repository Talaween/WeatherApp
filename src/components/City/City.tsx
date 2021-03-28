import React from 'react';
import {Card} from 'antd';

export interface CityProps {
    name: String;
    min: number;
    max: number;
}
export const City:React.FC<CityProps> = ({name, max, min}:CityProps) => {

    return  <Card title={name} style={{ width: 300 }}>
        <p>{`Maximum Temperature is: ${max}`}</p>
        <p>{`Minimum Temperature is: ${min}`}</p>
    </Card>;
}