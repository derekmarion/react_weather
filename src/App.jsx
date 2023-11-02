import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar.jsx';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard.jsx';
import './App.css';

function App() {
  const [locationKey, setLocationKey] = useState('');  //key needed for api's forcast query
  const [locationCity, setLocationCity] = useState('');  //city name gathered for display later
  const [weatherData, setWeatherData] = useState(null);  //set of data being passed to weather cqard for display
  const [error, setError] = useState(null);  //error handling

  const handleSearch = async (postalCode) => {  //logic to handle the initial query to the api for data
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${postalCode}&apikey=AX65Pgq4P9lLGdpAzXHC8znWWG4uGGgU`
      );
      setLocationKey(response.data[0].Key);  // this is the key data required for the next query
      setLocationCity(response.data[0].LocalizedName);  // city name to pass into weather data

    } catch (err) {
      setError('An error occurred while fetching location data. (handleSearch)'); // error handling
    }
  };
 
  useEffect(() => {   // watching the locationKey state for changes
    if (locationKey) {  // triggers the next query when the change is detected
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=AX65Pgq4P9lLGdpAzXHC8znWWG4uGGgU`
          );  // uses the location key to match api syntax for a forecast query
          // console.log(response.data.DailyForecasts[0].Day.IconPhrase) 
          setWeatherData({forecast: response.data.DailyForecasts[0].Day.IconPhrase, city: locationCity});  // sets data to object to pass in to weather card
          console.log(weatherData)
        } catch (err) {
          setError('An error occurred while fetching weather data. (fetchData)');  // error handling
        }
      };
      fetchData(); // call the function
    }
  }, [locationKey]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <div className="text-red-500">{error}</div>}
      {weatherData && <WeatherCard data={weatherData}/>}
    </>
  );
}

export default App;
