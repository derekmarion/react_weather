import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar.jsx';
import axios from 'axios';
// import LocationButton from '../components/locationbutton'
// import WeatherCard from '../components/weathercard'

import './App.css'

function App() {
  const handleSearch = (input) => {
    console.log('Search input:', input);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {/* <LocationButton /> */}
      {/* <WeatherCard /> */}
    </>
  );
}

export default App;
