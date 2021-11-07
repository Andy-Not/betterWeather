import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    city: "",
    weatherStatus: "",
    temperature: "",
    weatherMain: "",
    currentTime: null,
    sunriseTime: null,
    sunsetTime: null,
    icon: ""
}

const apiSlice = createSlice({
    name:"weather",
    initialState,
    reducers: {
        updateWeatherInfo(state, action) {
            state.city = action.payload.city;
            state.weatherStatus = action.payload.weatherStatus;
            state.temperature = action.payload.temperature;
            state.weatherMain = action.payload.weatherMain;
            state.currentTime = action.payload.currentTime;
            state.sunriseTime = action.payload.sunriseTime;
            state.sunsetTime = action.payload.sunsetTime;
            state.icon = action.payload.icon;
        }
    }
})


export const apiActions = apiSlice.actions;

export default apiSlice;