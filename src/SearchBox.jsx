import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';



export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "876b4ddac4d09f8d395015e84251dd22";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jasonResponse = await response.json();
            let result = {
                city: city,
                humidity: jasonResponse.main.humidity,
                temp: jasonResponse.main.temp,
                tempmin: jasonResponse.main.temp_min,
                tempmax: jasonResponse.main.temp_max,
                feelsLike: jasonResponse.main.feelsLike,
                weather: jasonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {err && <h2 style={{ color: "tomato" }}>No such place exits</h2>}
            </form>
        </div>
    )
}