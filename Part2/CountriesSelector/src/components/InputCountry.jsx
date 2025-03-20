const InputCountry = ({ value, onChange, countriesTotal }) => {
  console.log(countriesTotal);
  if(countriesTotal.length === 1) {
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type a country"
        />
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
      </div>
    );
  }


  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type a country"
    />
  );
};

export default InputCountry;
