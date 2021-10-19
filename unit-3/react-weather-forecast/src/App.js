import React from "react";
import "./styles.css";
import data from "./weatherData"
import WeatherForecast from "./Components/WeatherForecast"

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
        {data.map( (forecast, index) => <WeatherForecast {...forecast} key={index} />)}
      </section>
    </div>
  );
}
