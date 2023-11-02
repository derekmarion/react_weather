import React from 'react';

const WeatherCard = ({ data }) => {
    const lowerForecast = data.forecast.toLowerCase();
    return (
        <div className="bg-white shadow-md rounded-md p-4 my-4">
        Today's forecast in {data.city} is {lowerForecast}.
        </div>
    );
};

export default WeatherCard;