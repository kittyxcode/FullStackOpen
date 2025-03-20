import {useState, useEffect} from 'react';

import InputCountry from './components/InputCountry';
import countries from './services/countries';


function App() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    countries.getAll().then((initialCountries) => {
      setCountriesData(initialCountries);
    });
  }
  , []);




  return (
    <div>
      find countries:  <InputCountry />
    </div>
  );
}

export default App;
