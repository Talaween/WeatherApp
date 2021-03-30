const API_KEY = process.env.REACT_APP_WEATHER_BIT_API_KEY;

export const currentWeatherAPI = (city:string, code:string) => `https://api.weatherbit.io/v2.0/current?city=${city},${code}&key=${API_KEY}`;

export const forecastWeatherAPI = (city:string, code:string) => `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${code}&key=${API_KEY}`;
