import { configureStore, Action, combineReducers} from '@reduxjs/toolkit'
import citiesReducer from '../components/CurrentWeather/CitiesSlice';
import displayReducer from '../components/AppDisplay/AppDisplaySlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

const store = configureStore({
  reducer: combineReducers({cities: citiesReducer, forecastFor: displayReducer} ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store
