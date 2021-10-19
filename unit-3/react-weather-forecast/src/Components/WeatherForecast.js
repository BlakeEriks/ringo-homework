import React from "react";
import WeatherData from "./WeatherData";

const WeatherForecast = ({img, conditions, time}) => {

    return (
        <div className="weather">
            <img src={img} alt="" />
            <WeatherData conditions={conditions} time={time}/>
        </div>
    );
};

export default WeatherForecast