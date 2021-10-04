import sun from '../assets/icons/svg/001-sunny.svg';
import moon from '../assets/icons/svg/013-new moon.svg';
import thunder from '../assets/icons/svg/007-thunder.svg';
import {useSelector} from "react-redux";
import { useState } from 'react';

const sunsetHandler = (dayUnixTime, sunsetUnixTime, sunriseUnixTime) => {
    const unixTimeCoverter = (unixTime) => {
        const date = new Date(unixTime * 1000);
        let hours = date.getHours();
        let ampm = hours >= 12 ? 'pm' : 'am';
        return {
            hours,
            ampm
        };
    }

    const sunsetTime = unixTimeCoverter(sunsetUnixTime);
    const sunriseTime = unixTimeCoverter(sunriseUnixTime);
    const currentTime = unixTimeCoverter(dayUnixTime);
    let isSunset = null;

    if (currentTime.ampm === "am" && currentTime.hours >= sunriseTime.hours){
        isSunset = false
    }
    if (currentTime.ampm === "pm" && currentTime.hours >= sunsetTime.hours){
        isSunset = true
    }
    return isSunset
}




const IconChanger = () => {

    console.log(sunsetHandler(1633305978,1633300857,1633258828));


    return(
        <div style={{color: 'red'}}>

        </div>
    )
}


export default IconChanger;