import React, { useState } from 'react';
import Info from '../info/info';
import Form from '../form/form';
import Weather from '../weather/weather';

import './app.css';

const API_KEY = '';


const App = () => {
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState('10.05.2021');
    const [name, setName] = useState('London');
    const [country, setCountry] = useState('GB');
    const [temp, setTemp] = useState('23');
    const [weather, setWeather] = useState('Drizzle');
    const [description, setDescription] = useState('light intensity drizzle');
    const [sunrise, setSunrise] = useState('6:05');
    const [sunset, setSunset] = useState('19:24');
 
    const getWeather = async (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value);
        if (city) {
            const api_url = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();
            // setDate(data.dt);
            // setName(data.name);
            // setCountry(data.sys.country);
            // setTemp(data.main.temp);
            // setWeather(data.weather.main);
            // setDescription(data.weather.description);
            // setSunrise(data.sys.sunrise);
            // setSunset(data.sys.sunset);
            // setLoading(false);
            // console.log(data);
            // console.log(name, country, temp);
        }
        
    }

    return(
        <div className='container'>
            <Info />
            <Form getWeather={getWeather}/>
            <Weather
                loading={loading}
                error={error}
                date={date}
                name={name}
                country={country}
                temp={temp}
                weather={weather}
                description={description}
                sunset={sunset}
                sunrise={sunrise}
                />
        </div>
    )
}

export default App;