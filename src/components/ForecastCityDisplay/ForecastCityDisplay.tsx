import React from "react";
import {List, Card} from 'antd';
import {ICity} from '../../store/types';

interface ForecastProps {
    city: ICity;
}
export const ForecastCityDisplay: React.FC<ForecastProps> = ( {city}:ForecastProps) => {

    return  <List
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
}