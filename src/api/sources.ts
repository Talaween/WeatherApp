import {AppConfig} from '../App.config';

export const currentWeatherAPI = (city:string, code:string) => `https://api.weatherbit.io/v2.0/current?city=${city},${code}&key=${AppConfig.apiKey}`;

export const forecastWeatherAPI = (city:string, code:string) => `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${code}&key=${AppConfig.apiKey}`;
