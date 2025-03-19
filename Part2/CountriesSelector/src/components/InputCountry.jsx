const InputCountry = ({ value, onChange }) => {
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
