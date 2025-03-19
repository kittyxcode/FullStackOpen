import InputCountry from './components/InputCountry';
import {getAll, getOne} from './services/countries';


function App() {
  return (
    <div>
      find countries:  <InputCountry />
    </div>
  );
}

export default App;
