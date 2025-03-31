import ShowButton from './ShowButton';

const InputCountry = ({ value, onChange, countriesTotal, onShowCountry }) => {
  console.log(countriesTotal);

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
        <p>capital {countriesTotal[0].capital}</p>
        <p>population {countriesTotal[0].population}</p>
        <h3>languages</h3>
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
