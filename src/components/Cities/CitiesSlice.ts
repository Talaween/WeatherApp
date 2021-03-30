import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';
import axios from "axios";
import {AppThunk} from '../../store/store';
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
        dispatch(updateCity({...city, currentWeather: createWeather(response)}));
    } catch (error) {
        dispatch(updateCity({...city, error: error.toString()}));
    } finally {
        dispatch(setLoading({...city, isLoading:false}));
    }
}

export const getForcastWeather = (city:ICity): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading({...city, isLoading:true}));
        const response = await axios.get(forecastWeatherAPI(city.name, city.countryCode));
        dispatch(updateCity({...city, currentWeather: createWeather(response)}));
    } catch (error) {
        dispatch(updateCity({...city, error: error.toString()}));
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
    updateCity: (state: ICities, action:PayloadAction<ICity>) => {
        let city = state.cities.find(city => city.name === action.payload.name );
        if(city) city = action.payload;
    },
  },
});

export const {setLoading, updateCity  } = CitiesSlice.actions;

export default CitiesSlice.reducer;

export const selectAllcities = (state:ICities) => state.cities

export const selectCityByName = (state:ICities, name:string) =>
  state.cities.find( city => city.name === name)
