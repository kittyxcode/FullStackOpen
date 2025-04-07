import ShowButton from './ShowButton';
import { useState, useEffect } from 'react';
import apiWater from '../services/apiWeather';
import imgWather from '../services/ImgWather';


const InputCountry = ({ value, onChange, countriesTotal, onShowCountry }) => {
  const [temp, setTemp] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [wind, setWind] = useState(null);

  useEffect(() => {
    if(countriesTotal.length === 1) {
      const country = countriesTotal[0];
      const lat = country.latlng[0];
      const lon = country.latlng[1];
      apiWater.getWaterData(lat, lon)
        .then((data) => {
          if (data) {
            console.log('Weather data:', data);
            setTemp(data.main.temp - 273.15);
            setWeatherIcon(data.weather[0].icon);
            setWind(data.wind.speed);
          } else {
            console.error('No weather data available');
          }
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }
  , [countriesTotal]);

  useEffect(() => {
    if (weatherIcon) {
      imgWather.getImgData(weatherIcon)
        .then((data) => {
          if (data) {
            const url = URL.createObjectURL(data);
            setWeatherIcon(url);
          } else {
            console.error('No weather icon available');
          }
        })
        .catch((error) => {
          console.error('Error fetching weather icon:', error);
        });
    }
  }, [weatherIcon]);
  
  if (countriesTotal.length === 1) {
    return (
      <div>
        <label>
          Select country:
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Type a country"
          />
        </label>
        <h2>{countriesTotal[0].name.common}</h2>
        <p>Capital {countriesTotal[0].capital}</p>
        <p>Population {countriesTotal[0].population}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(countriesTotal[0].languages).map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
        <img
          src={countriesTotal[0].flags.png}
          alt={countriesTotal[0].name.common}
          width="100"
        />
        <h3>Weather in {countriesTotal[0].capital}</h3>
        <p>Temperature {temp} Celsius</p>
        <img src={weatherIcon}></img>
        <p>Wind {wind} m/s</p>
      </div>
    );
  }

  if (countriesTotal.length > 1) {
    return (
      <div>
        <label>
          Select country:
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Type a country"
          />
        </label>
        <ul>
          {countriesTotal.map((country, index) => (
            <li key={index}>
              {country.name.common}
              <ShowButton onClick={() => onShowCountry(country)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <label>
      Select country:
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type a country"
      />
    </label>
  );
};

export default InputCountry;
