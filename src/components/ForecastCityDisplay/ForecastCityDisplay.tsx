import React, { useEffect } from "react";
import {List, Card} from 'antd';
import {ICity} from '../../store/types';
import {fetchForcastWeather, selectAllCities} from '../CurrentWeather/CitiesSlice';
import {selectDisplay} from '../AppDisplay/AppDisplaySlice';
import { useSelector, useDispatch } from 'react-redux'

export const ForecastCityDisplay: React.FC = () => {

    const currentDisplay =  useSelector(selectDisplay);
    const availableCities = useSelector(selectAllCities);

    const dispatch = useDispatch();

    const city = availableCities.find((city:ICity) => city.name === currentDisplay);

    useEffect(()=> {
        if(city)
            dispatch(fetchForcastWeather(city));
    }, [])
    return  city 
            ? <>
                <h2>{city.name} Weather Forecast</h2>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={city.forecastWeather}
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
            : null;
}