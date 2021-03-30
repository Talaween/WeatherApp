import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import axios from "axios";
import {AppThunk, RootState} from '../../store/store';
import {AppConfig} from '../../App.config';
import { createCity, createWeather} from '../../store/createData';
import {currentWeatherAPI, forecastWeatherAPI} from '../../api/sources';

export interface IWeather {
    dateTime: string;
    temperature: {
        temp: number;
        min: number;
        max: number;
    };
    state: string;
}

export interface ICity {
    name : string;
    countryCode: string;
    isLoading: boolean;
    currentWeather : IWeather | null;
    forecastWeather: Array<IWeather> | null;
    error?: string;
};

export interface ICities {
    cities : Array<ICity>;
    error?: string;   
};

const initialState = {
    cities: AppConfig.cities.map( (item:string, index:number) => createCity(item, AppConfig.countryCode[index] )),
} as ICities;

export const getCurrentWeather = (city:ICity): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading({...city, isLoading:true}));
        const response = await axios.get(currentWeatherAPI(city.name, city.countryCode));
        dispatch(updateCurrentWeather({...city, currentWeather: createWeather(response.data)}));
    } catch (error) {
        dispatch(updateCurrentWeather({...city, error: error.toString()}));
    } finally {
        dispatch(setLoading({...city, isLoading:false}));
    }
}

export const getForcastWeather = (city:ICity): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading({...city, isLoading:true}));
        const response = await axios.get(forecastWeatherAPI(city.name, city.countryCode));
        dispatch(updateForecastWeather({...city, currentWeather: createWeather(response.data)}));
    } catch (error) {
        dispatch(updateForecastWeather({...city, error: error.toString()}));
    } finally {
        dispatch(setLoading({...city, isLoading:false}));
    }
}

export const CitiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setLoading: (state, action:PayloadAction<ICity>) => {
        const city = state.cities.find(city => city.name === action.payload.name );
        if(city) city.isLoading = action.payload.isLoading;
    },
    updateCurrentWeather: (state, action:PayloadAction<ICity>) => {
        const city = state.cities.find(city => city.name === action.payload.name );
        if(city) city.currentWeather = action.payload.currentWeather;
    },
    updateForecastWeather: (state, action:PayloadAction<ICity>) => {
        const city = state.cities.find(city => city.name === action.payload.name );
        if(city) city.currentWeather = action.payload.currentWeather;
    },
  },
});

export const { setLoading, updateCurrentWeather, updateForecastWeather } = CitiesSlice.actions;

export const selectAllCities = (state:RootState) => state.App.cities

export const selectCityByName = (state:RootState, name:string) =>
  state.App.cities.find( city => city.name === name)

export default CitiesSlice.reducer;
