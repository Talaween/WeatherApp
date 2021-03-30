import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import {RootState} from '../../store/store';

const initialState = '';

export const displaySlice = createSlice({
  name: "forecastFor",
  initialState,
  reducers: {
    setForecastFor: (state, action:PayloadAction<string>) => {
        state = action.payload;
    },
  },
});

export const { setForecastFor } = displaySlice.actions;

export const selectDisplay = (state:RootState) => state.forecastFor;

export default displaySlice.reducer;
