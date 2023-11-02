import { useState, useEffect } from 'react'
import SearchBar from '../src/components/searchbar'
import LocationButton from '../src/components/locationbutton'
import WeatherCard from '../src/components/weathercard'

import './App.css'

function App() {

  return (
    <>
      <SearchBar />
      {/* <LocationButton /> */}
      <WeatherCard />
    </>
  )
}

export default App
