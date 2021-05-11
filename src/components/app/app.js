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

    const [state, setState] = useState('');
 
    const getWeather = async (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value);
        console.log(city);
        if (city) {
            try{
                setLoading(true);
                const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                const data = await api_url.json();
                console.log(data);
                const info = {
                    dt: data.dt, 
                    name: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    icon: data.weather[0].icon,
                    weather: data.weather[0].main,
                    description: data.weather[0].description,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset
                };
                setState(() => info);
                setLoading(false);
            }
            catch(error) {
                console.log('caught error');
                setLoading(false);
                setError(true);
            }
        } 
    }
    return(
        <div className='container'>
            <Info />
            <Form getWeather={getWeather}/>
            <Weather
                loading={loading}
                error={error}
                state={state}
                />
        </div>
    )
}

export default App;