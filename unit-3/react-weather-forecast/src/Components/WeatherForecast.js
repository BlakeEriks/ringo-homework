import React from "react";
import WeatherData from "./WeatherData";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = ({img, conditions, time}) => {

    return (
        <div className="weather">
            <WeatherIcon img={img}/>
            <WeatherData conditions={conditions} time={time}/>
        </div>
    );
};

export default WeatherForecast