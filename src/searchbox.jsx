import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

  const API_URL= "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "7e6625f6343876a9d9abed112d9c5537";

  let getWeather = async () => {
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    let result={
      city: jsonresponse.name,
      tempmin: jsonresponse.main.temp_min,
      tempmax: jsonresponse.main.temp_max,
      humidity: jsonresponse.main.humidity,
      feelslike: jsonresponse.main.feels_like,
      temperature: jsonresponse.main.temp,
      description: jsonresponse.weather[0].description,
      
    };
    console.log(result);
    return result;
  };
    let [city, setCity] = useState("");

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        event.preventDefault();
        console.log("City searched:", city);
        setCity("");
        let newinfo  = await getWeather();
        updateInfo(newinfo);
    };
  return (
    <div className='searchbox'>
        <form  onSubmit={handleSubmit}>
       <TextField id="City" label="City Name" variant="outlined" value={city}
       onChange={handleChange}/>
       <br />
       <br />
       <Button variant="contained" type='Submit'>Search</Button>
      </form>
    </div>
  )
};