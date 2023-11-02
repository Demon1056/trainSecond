export const Filter = ({ handlerInput, value }) => (
  <input value={value} onChange={handlerInput} type="text" name="filter" />
);
