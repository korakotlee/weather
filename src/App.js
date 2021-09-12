import React, { useState, useEffect } from 'react';
import City from './components/City'
import Weather from './components/Weather'
import './App.css';
import axios from 'axios'

function App() {
  const [city, setCity] = useState('Phoenix')
  const [temp, setTemp] = useState(0)
  useEffect( ()=> {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=75d39685ba95952f0aa4a2adfcd8d406&units=imperial`)
    .then(res => {
      const temp = res.data.main.temp
      // console.log(res.data)
      setTemp(temp)
    })
  })
  const updateCity = (city) => {
    setCity(city)
  }
  return (
    <div className="App">
      <h1>{city}</h1>
      <div style={{display:'flex', flexDirection:'column'}}>
        <City update={updateCity}/>
        <Weather temp={temp}/>
      </div>
    </div>
  );
}

export default App;
