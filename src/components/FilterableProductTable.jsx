import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (useInput) => {
    setFilterText(useInput.toLowerCase());
    console.log(useInput)
  };

  const handleInStockChange = (userInStockOnly) => {
    setInStockOnly(userInStockOnly);
    console.log(userInStockOnly)
  };

  const products = [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
    },
    {
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Nexus 7',
    },
    {
      category: 'Winter Clothes',
      price: '$09.99',
      stocked: true,
      name: 'T-shirt',
    },
    {
      category: 'Winter Clothes',
      price: '$19.99',
      stocked: true,
      name: 'Jacket',
    },
    {
      category: 'Winter Clothes',
      price: '$99.99',
      stocked: false,
      name: 'Jeans Pant',
    },
  ];

  return (
    <div className="filterableProductTable">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterTextChange={handleFilterTextChange}
        handleInStockChange={handleInStockChange}
      />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
       />
    </div>
  );
};
export default FilterableProductTable;
