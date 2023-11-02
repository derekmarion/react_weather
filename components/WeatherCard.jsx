import React from 'react';
import * as images from '../src/images';

const WeatherCard = ({ data }) => {
    const lowerForecast = data.forecast.toLowerCase();
    return (
        <div className="bg-white shadow-md rounded-md p-4 my-4 text-center">
        Today's forecast in {data.city} is {lowerForecast}. {lowerForecast === "sunny" ? <img src={images.sunny} class='mx-auto' /> : null}
        </div>
    );
};

export default WeatherCard;