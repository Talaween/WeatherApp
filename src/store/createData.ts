import {ICity, IWeather} from '../components/Cities/CitiesSlice';

export const createCity = (name:string, countryCode:string):ICity => {

    return {
        name,
        countryCode,
        currentWeather: null,
        forecastWeather: null,
        isLoading: false,
    }
};

export const createWeather = (data:any):IWeather => {

    return {
        dateTime: data.datetime,
        state: data.weather.description,
        temperature : {
            temp: data.temp,
            min: data.min,
            max: data.max,
        },
    }
}

export const createForecastWeather = (data:any):Array<IWeather> => {

    return data.map( (item:any) => { 
        return {
            dateTime: item.datetime,
            state: item.weather.description,
            temperature : {
                temp: data.temp,
                min: data.low_temp,
                max: data.max_temp,
            },
        };
    });
};