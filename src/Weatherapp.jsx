import "./Weatherapp.css"
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react";

export default function Weatherapp() {
    const [weatherapp, setweatherapp] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "MIST",
    });

    let updateInfo = (newinfo) => {
        setweatherapp(newinfo);
    }

    return (
        <div className="weatherapp">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherapp} />
        </div>
    )
}