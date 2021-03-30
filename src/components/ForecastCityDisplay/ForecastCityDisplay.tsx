import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {List, Card, Input} from 'antd';
import {ICity, IWeather} from '../../store/types';
import {fetchForcastWeather, selectAllCities} from '../CurrentWeather/CitiesSlice';
import {selectDisplay} from '../AppDisplay/AppDisplaySlice';
import './ForecastCityDisplay.css';

export const ForecastCityDisplay: React.FC = () => {

    const currentDisplay =  useSelector(selectDisplay);
    const availableCities = useSelector(selectAllCities);

    const dispatch = useDispatch();

    const city = availableCities.find((city:ICity) => city.name === currentDisplay);

    const [min, setMin] = useState(1000);
    const [max, setMax] = useState(-1000);

    let dataSource: IWeather[] | undefined = undefined;

    const handleMaxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value && !isNaN(Number(e.target.value)))
            setMax(Number(e.target.value));
        else
           setMax(-1000);
    };
    const handleMinChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value && !isNaN(Number(e.target.value)))
            setMin(Number(e.target.value));
        else
            setMin(1000);
    };

    if(city)
        dataSource = city.forecastWeather?.filter(item => item.temperature.min <= min && item.temperature.max >= max);

    useEffect(()=> {
        if(city)
            dispatch(fetchForcastWeather(city));
    }, [])
    return  city 
            ? <>
                <div className="header">
                    <h2>{city.name} Weather Forecast</h2>
                    <Input className="input" placeholder="Max Temp" onChange={handleMaxChange} />
                    <Input className="input" placeholder="Min Temp" onChange={handleMinChange} />
                </div>
                
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={dataSource}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.dateTime}>
                            <div>Max Temp:{item.temperature.max}</div>
                            <div>Min Temp:{item.temperature.min}</div>
                        </Card>
                    </List.Item>
                    )}
                />;
            </>
            :  <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={undefined}
                />;
}