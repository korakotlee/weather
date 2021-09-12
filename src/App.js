import React, { useState, useEffect } from "react";
import City from "./components/City";
import Weather from "./components/Weather";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState("Tokyo");
  const [temps, setTemps] = useState([]);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const getTemps = async (_) => {
      const cities = ["Phoenix", "Bangkok", "Los Angeles", "Orlando"];
      let all_temps = [];
      await Promise.all(
        cities.map((c) => {
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?q=${c}&APPID=75d39685ba95952f0aa4a2adfcd8d406&units=imperial`
            )
            .then((res) => {
              const temp = res.data.main.temp;
              all_temps.push({ city: c, temp: temp });
            });
        })
      );
      setTemps(all_temps);
    };
    getTemps();
    console.log("Hello");
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=75d39685ba95952f0aa4a2adfcd8d406&units=imperial`
      )
      .then((res) => {
        const temp = res.data.main.temp;
        setTemp(temp);
      });
  }, [city]);

  const updateCity = (city) => {
    setCity(city);
  };

  return (
    <div className="App">
      <h1>{city}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <City update={updateCity} />
        <Weather key={city} city={city} temp={temp} />
        {temps.map((t, index) => {
          console.log(t);
          return <Weather key={index} city={t.city} temp={t.temp} />;
        })}
      </div>
    </div>
  );
}

export default App;
