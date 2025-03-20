import {useState, useEffect} from 'react';

import InputCountry from './components/InputCountry';
import countries from './services/countries';


function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);


  useEffect(() => {
    countries.getAll().then((initialCountries) => {
      setCountriesData(initialCountries);
      //console.log(initialCountries);
    });
  }
  , []);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    const filteredCountries = countriesData.filter((country) => {
      return country.name.common.toLowerCase().includes(filterValue.toLowerCase());
    });
    setCountriesToShow(filteredCountries);
  }

  return (
    <div>
      find countries:  <InputCountry onChange={handleFilterChange} countriesTotal={countriesToShow}/>
    </div>
  );
}

export default App;
