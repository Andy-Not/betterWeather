import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    city: '',
    weatherStatus: '',
    temperature: '',
    weatherMain: '',
}

const apiSlice = createSlice({
    name:'weather',
    initialState,
    reducers: {
        updateWeatherInfo(state, action) {
            state.city = action.payload.city;
            state.weatherStatus = action.payload.weatherStatus;
            state.temperature = action.payload.temperature;
            state.weatherMain = action.payload.weatherMain;
        }
    }
})


export const apiActions = apiSlice.actions;

export default apiSlice;