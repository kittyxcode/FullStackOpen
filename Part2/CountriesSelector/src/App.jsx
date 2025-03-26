import { useState, useEffect } from 'react';
import InputCountry from './components/InputCountry';
import countries from './services/countries';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countries.getAll().then((initialCountries) => {
      setCountriesData(initialCountries);
      //console.log(initialCountries);
    });
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    const filteredCountries = countriesData.filter((country) => {
      return country.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setCountriesToShow(filteredCountries);
    setSelectedCountry(null); // Reset selected country when filtering
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  //
  return (
    <div>
      <InputCountry
        value={filterValue}
        onChange={handleFilterChange}
        countriesTotal={countriesToShow}
        onShowCountry={handleShowCountry}
      />
      {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>capital {selectedCountry.capital}</p>
          <p>population {selectedCountry.population}</p>
          <h3>languages</h3>
          <ul>
            {Object.values(selectedCountry.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.name.common}
            width="100"
          />
        </div>
      )}
    </div>
  );
}

export default App;
