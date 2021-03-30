import {ICity, IWeather} from './types';

export const createCity = (name:string, countryCode:string):ICity => {

    return {
        name,
        countryCode,
        currentWeather: undefined,
        forecastWeather: undefined,
        isLoading: false,
    }
};

export const createWeather = (data:any):IWeather => {

    return {
        dateTime: data.data[0].datetime,
        state: data.data[0].weather.description,
        temperature : {
            temp: data.data[0].temp,
            min: data.data[0].min,
            max: data.data[0].max,
        },
    }
}

export const createForecastWeather = (data:any):Array<IWeather> => {

    return data.data.map( (item:any) => { 
        return {
            dateTime: item.datetime,
            state: item.weather.description,
            temperature : {
                temp: item.temp,
                min: item.low_temp,
                max: item.max_temp,
            },
        };
    });
};