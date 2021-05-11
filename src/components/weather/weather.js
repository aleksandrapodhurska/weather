import React from 'react';
import Spinner from '../spinner/spinner';
import './weather.css';
import sun from './free-icon-sun-2121363.svg'
import drizzle from './030-rain.svg';

const Weather = ({loading, error, date, name, country, temp, weather, description, sunset, sunrise}) => {
    return (loading) ? 
        <Spinner /> : 
        (name) ?
            <CardGroup
                date={date}
                name={name}
                country={country}
                temp={temp}
                weather={weather}
                description={description}
                sunset={sunset}
                sunrise={sunrise}/> : 
            <Error />
}

export default Weather;

const CardGroup = ({date, name, country, temp, weather, description, sunset, sunrise}) => {
    let url = '';
    function ChoosingPicture(weather) {
        switch (weather){
            case "Sun":
                url = sun;
                console.log("Sun");
                break;
            case "Drizzle":
                url = drizzle;
                console.log("Drizzle");
                break;
            default:
                console.log("Default");   
        }
    }
    ChoosingPicture(weather);
// console.log(url);
    return(
        <div className="card mb-3 weather-card">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={url} alt="sun" className="card-img"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5>{date}</h5>
                <h4 className="card-title">{name}, {country}</h4>
                <p className="card-text">Temperature: {temp}</p>
                <p className="card-text">{description}</p>
                <p className="card-text-small"></p>
                <p className="card-text"><small className="text-muted">sunrise: {sunrise} sunset: {sunset}</small></p>
            </div>
            </div>
        </div>
        </div>
    )
}

const Error = () => {
    return(
        <div className="card" >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">No city chosen yet</p>
            </div>
        </div>
    )
}


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