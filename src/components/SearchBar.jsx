import React from 'react';

const SearchBar = ({filterText, inStockOnly, handleFilterTextChange, handleInStockChange}) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={(e) => handleFilterTextChange(e.target.value)}
    />
    <p>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => handleInStockChange(e.target.checked)}
      />{' '}
      Only show products in stock
    </p>
  </form>
);
export default SearchBar;
// {' '} this code is used in 16 line.This code create a space between text and checked button in the UI
