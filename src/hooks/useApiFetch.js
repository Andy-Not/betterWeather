import {useDispatch} from "react-redux";
import {apiActions} from "../store/api-slice";
import {useCallback} from 'react';

const useApiFetch =  () => {

    const dispatch = useDispatch();

    const dataFetch = useCallback(async (url) => {
        const response = await fetch(url);
        if (!response.ok){
            dispatch(apiActions.updateWeatherInfo({
                hasError: true
            }))
           return
        }
        const data = await response.json()
        dispatch(apiActions.updateWeatherInfo({
            city: data.name,
            temperature: Math.round(data.main.temp),
            weatherStatus: data.weather[0].description,
            weatherMain: data.weather[0].main,
            currentTime: data.dt,
            sunsetTime: data.sys.sunset,
            sunriseTime: data.sys.sunrise,
            icon: data.weather[0].icon,
            hasError: false
        }))
    },[dispatch])
    return {
        requestData: dataFetch
    }
}
export default useApiFetch;