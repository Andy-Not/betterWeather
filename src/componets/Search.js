import classes from './Search.module.css';
import {useEffect, useState} from 'react';
import useApiFetch from '../hooks/useApiFetch';
import logo from '../assets/icons/svg/logo.svg';


const Search = () => {

    const [unit, setUnit] = useState('metric');
    const [city, setCity] = useState('');
    const {requestData} = useApiFetch(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=${unit}`);
    const {requestData: onLoadFetch} = useApiFetch();

    useEffect(() =>{
        const geoLoactionHandler = async () => {
            if (navigator.geolocation){
                await navigator.geolocation.getCurrentPosition(position => {
                    onLoadFetch(`https://api.openweathermap.org/data/2.5/weather?${"&lat=" + position.coords.latitude  + "&lon=" + position.coords.longitude}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=${unit}`)
                });
            }else{
                alert('navigator geoloacation not allowed :(')
            }
        }
        geoLoactionHandler();
    },[onLoadFetch])

    const cityInputHandler = (event) => {
        setCity(event.target.value)
    }

    const searchDataByCityHandler = (event) => {
        event.preventDefault();
        if (city === ''){
            return
        }
       requestData(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=${unit}`)
        setCity('')
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes['logo-wrapper']}>
                <img className={classes.logo} src={logo} alt=""/>
            </div>
            <form onSubmit={searchDataByCityHandler}>
                <input placeholder={'City'} onChange={cityInputHandler} value={city}/>
                <button className={classes.btn} type={"submit"}>Submit</button>
            </form>
            <div className={classes.city}>
                {city}
            </div>
        </div>
    )
}
export default Search;