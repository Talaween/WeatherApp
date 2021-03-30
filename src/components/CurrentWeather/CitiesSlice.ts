import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import axios from "axios";
import {AppThunk, RootState} from '../../store/store';
import {AppConfig} from '../../App.config';
import { createCity, createForecastWeather, createWeather} from '../../store/createData';
import {currentWeatherAPI, forecastWeatherAPI} from '../../api/sources';
import {ICity} from '../../store/types';

const initialState= AppConfig.cities.map( 
            (item:string, index:number) => createCity(item, AppConfig.countryCode[index] 
        ));

export const fetchCurrentWeather = (city:ICity): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading({...city, isLoading:true}));
        const response = await axios.get(currentWeatherAPI(city.name, city.countryCode));
        dispatch(updateCurrentWeather({...city, currentWeather: createWeather(response.data)}));
    } catch (error) {
        dispatch(setError({...city, error: error.toString()}));
    } finally {
        dispatch(setLoading({...city, isLoading:false}));
    }
}

export const fetchForcastWeather = (city:ICity): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading({...city, isLoading:true}));
        const response = await axios.get(forecastWeatherAPI(city.name, city.countryCode));
        dispatch(updateForecastWeather({...city, forecastWeather: createForecastWeather(response.data)}));
    } catch (error) {
        dispatch(setError({...city, error: error.toString()}));
    } finally {
        dispatch(setLoading({...city, isLoading:false}));
    }
}

export const CitiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setLoading: (state, action:PayloadAction<ICity>) => {
        const city = state.find(city => city.name === action.payload.name );
        if(city) 
            city.isLoading = action.payload.isLoading;
    },
    setError: (state, action:PayloadAction<ICity>) => {
        const city = state.find(city => city.name === action.payload.name );
        if(city) 
            city.error = action.payload.error;
    },
    updateCurrentWeather: (state, action:PayloadAction<ICity>) => {
        const city = state.find(city => city.name === action.payload.name );
        if(city) 
            city.currentWeather = action.payload.currentWeather;
    },
    updateForecastWeather: (state, action:PayloadAction<ICity>) => {
        const city = state.find(city => city.name === action.payload.name );
        if(city) 
            city.forecastWeather = action.payload.forecastWeather;
    },
  },
});

export const { setLoading, updateCurrentWeather, updateForecastWeather, setError } = CitiesSlice.actions;

export const selectAllCities = (state:RootState) => state.cities;

export const selectCityByName = (state:RootState, name:string) =>
  state.cities.find( city => city.name === name)

export default CitiesSlice.reducer;
