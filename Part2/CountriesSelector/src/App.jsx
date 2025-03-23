import { useState, useEffect } from 'react';
import InputCountry from './components/InputCountry';
import countries from './services/countries';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [filterValue, setFilterValue] = useState('');

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
  };

  //construir el handler para ShowButton......

  return (
    <div>
      <InputCountry
        value={filterValue}
        onChange={handleFilterChange}
        countriesTotal={countriesToShow}
      />
    </div>
  );
}

export default App;
