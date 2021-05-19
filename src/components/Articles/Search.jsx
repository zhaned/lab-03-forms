import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onValueChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>Type a keyword{` `}</label>
    <input 
      type='text'
      value={value}
      onChange={onValueChange}
    />
    <button aria-label='search-articles'>Search</button>
  </form>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Search;