import React from 'react';
import * as images from '../src/images';

const WeatherCard = ({ data }) => {
    const lowerForecast = data.forecast.toLowerCase(); //additional values found at https://developer.accuweather.com/weather-icons
    
    const forecastImages = { //object to map forecast value images
        sunny: images.sunny,
        rain: images.rainy,
        cloudy: images.cloudy,
    };

    return (
        <div className="bg-white shadow-md rounded-md p-4 my-4 text-center">
        Today's forecast in {data.city} is {lowerForecast}. 
        {forecastImages[lowerForecast] && <img src={forecastImages[lowerForecast]} class='mx-auto' />}
        </div>
    );
};

export default WeatherCard;