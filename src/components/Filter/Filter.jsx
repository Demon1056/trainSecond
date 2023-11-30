import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/slices/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const updateFilteredValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  return <input onChange={updateFilteredValue} type="text" name="filter" />;
};
