import React from 'react';
import Spinner from '../spinner/spinner';
import './weather.css';

const Weather = ({loading, error, dt, name, country, temp, weather, description, sunset, sunrise, icon}) => {
    return (loading) ? 
            <Spinner /> : 
            (error) ?
            <Error /> :
            (name) ?
            <CardGroup
                dt={dt}
                name={name}
                country={country}
                temp={temp}
                weather={weather}
                description={description}
                sunset={sunset}
                sunrise={sunrise}
                icon={icon}/> : 
            <NoCityEntered />
}

const CardGroup = ({dt, name, country, temp, weather, description, sunset, sunrise, icon}) => {
    const date = new Date();
    function timeUpd(time) {
        const date = new Date(time * 1000);
        return date.toLocaleTimeString();
    }
    
    return(
        <div className="card mb-3 weather-card">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" className="card-img"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5>{date.toDateString(dt)}</h5>
                <h4 className="card-title">{name}, {country}</h4>
                <p className="card-text">Temperature: {temp}</p>
                <p className="card-text">{weather}: {description}</p>
                <p className="card-text-small"></p>
                <p className="card-text"><small className="text-muted">sunrise: {timeUpd(sunrise)} sunset: {timeUpd(sunset)}</small></p>
            </div>
            </div>
        </div>
        </div>
    )
}

const NoCityEntered = () => {
    return(
        <div className="card" >
            <div className="card-body">
                <p className="card-text">No city chosen yet</p>
            </div>
        </div>
    )
}

const Error = () => {
    return(
        <div className="card" >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Could not find the city you've chosen...</p>
                <p className="card-text">Please check if it is written correctly</p>
            </div>
        </div>
    )
}

export default Weather;


// function ChoosingPicture(weather) {
        
//     if (weather === 'Drizzle') {
//         return url = drizzle;
//     }
//     if (weather === 'Sun') {
//         return url = sun;
//     }
// }
// ChoosingPicture(weather);


// let url = "";

// switch (weather){
//     case "Sun":
//         console.log("Sun");
//     case "Drizzle":
//         console.log("Drizzle");
//     default:
//         console.log("Default");
// }

// style="width: 18rem;"
// const data = 
// {
//     "coord": {
//       "lon": -0.13,
//       "lat": 51.51
//     },
//     "weather": [
//       {
//         "id": 300,
//         "main": "Drizzle",
//         "description": "light intensity drizzle",
//         "icon": "09d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 280.32,
//       "pressure": 1012,
//       "humidity": 81,
//       "temp_min": 279.15,
//       "temp_max": 281.15
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 4.1,
//       "deg": 80
//     },
//     "clouds": {
//       "all": 90
//     },
//     "dt": 1485789600,
//     "sys": {
//       "type": 1,
//       "id": 5091,
//       "message": 0.0103,
//       "country": "GB",
//       "sunrise": 1485762037,
//       "sunset": 1485794875
//     },
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
//     }