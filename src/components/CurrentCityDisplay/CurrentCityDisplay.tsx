import React from 'react';
import {Card, Button} from 'antd';
import { useDispatch } from 'react-redux'
import {setForecastFor} from '../AppDisplay/AppDisplaySlice';
import './CurrentCityDisplay.css';

export interface CityProps {
    name: string;
    temp: number | undefined;
    state: string | undefined;
}
export const City:React.FC<CityProps> = ({name, state, temp}:CityProps) => {

    const dispatch = useDispatch();

    const cardExtra = <Button 
                        type="link" 
                        size={'small'}
                        onClick={()=> dispatch(setForecastFor(name))}
                        >
                            Weather Forecast
                        </Button>;

    return  <Card 
                title={name} 
                style={{ width: 300 }} 
                extra={ cardExtra }
            >
                <p>{'Current Weather State is:'}  <span className="bold">{state}</span></p>
                <p>{'Current Temperature is:'} <span className="bold">{temp}</span> </p>
            </Card>;
}