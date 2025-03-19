import {useState} from 'react';

import InputCountry from './components/InputCountry';
//import { getAll, getOne } from './services/countries';


function App() {
  const [countries, setCountries] = useState([]);


  return (
    <div>
      find countries:  <InputCountry />
    </div>
  );
}

export default App;
