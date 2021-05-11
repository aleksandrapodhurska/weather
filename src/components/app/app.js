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
    const [dt, setDate] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [temp, setTemp] = useState('');
    const [weather, setWeather] = useState('');
    const [description, setDescription] = useState('');
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [icon, setIcon] = useState('');
 
    const getWeather = async (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value);
        if (city) {
            try{
                setLoading(true);
                const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                const data = await api_url.json();
                
                setDate(data.dt);
                setName(data.name);
                setCountry(data.sys.country);
                setTemp(data.main.temp);
                setIcon(data.weather[0].icon);
                setWeather(data.weather[0].main);
                setDescription(data.weather[0].description);
                setSunrise(data.sys.sunrise);
                setSunset(data.sys.sunset);
                setLoading(false);
                console.log(data);
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
                dt={dt}
                name={name}
                country={country}
                temp={temp}
                weather={weather}
                description={description}
                sunset={sunset}
                sunrise={sunrise}
                icon={icon}
                />
        </div>
    )
}

export default App;