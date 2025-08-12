import SearchBox from "./searchbox" ;
import InfoBox from "./infobox" ;
import { useState } from "react";

export default function WeatherApp() {
const [weatherInfo, setWeatherInfo] = useState(
    {
        city: "Goa",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 24.0,
        tempmax: 26.0,
        humidity: 60,
        description: "clear sky",
    }
);

let updateInfo= (newinfo) =>{
    setWeatherInfo(newinfo);
}

    return (
    <div style={{textAlign: "center"}}>
        <h2>Know The Weather</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info ={weatherInfo}/>
    </div>
)};

