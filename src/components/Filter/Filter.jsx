import React from 'react';

const Filter = ({filter, onChange}) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;
