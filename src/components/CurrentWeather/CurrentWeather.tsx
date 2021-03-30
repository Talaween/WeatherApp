import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {City} from '../CurrentCityDisplay/CurrentCityDisplay';
import {fetchCurrentWeather, selectAllCities} from './CitiesSlice';

export const CurrentWeather:React.FC = () => {

    const dispatch = useDispatch();

    const availableCities = useSelector(selectAllCities);

    useEffect (()=> {
        if(availableCities)
            availableCities.forEach(city => {
                dispatch(fetchCurrentWeather(city));
            });
    }, []);

    return <Row>
        {availableCities && availableCities.map( (city) => 
            <Col key={city.name} span={6}>
                <City 
                    name={city.name} 
                    temp={city.currentWeather?.temperature?.temp}
                    state={city.currentWeather?.state} 
                />
            </Col>)
        }
    </Row>
}