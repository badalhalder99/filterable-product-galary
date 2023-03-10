import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;
  //The difference between let and const is that const you can only assign a value to a variable once
  //But let allows you to reassign after it has been assigned.
  products.forEach((product) => {
    if (product.name.indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    //indexOf() method: if value not found,indexOf() method returns -1
    //product.name.indexOf(filterText); //if value not found,this code returns -1
    if (inStockOnly && !product.stocked) {
      return;
    }
    //if(!product.stocked){return;} //Jodi stocked false hoy tahole return koro. Orthath stock ey product na thakle seta UI te dekhanor dorkar nai...
    //if(inStockOnly){return;}//jod inStockOnly true hoy tahole return koro.Orthath inStockOnly true hole kono product show korar dorkar nai....
    //if(inStockOnly && !product.stocked) {return;} //Initially state er moddhe inStockOnly false set kora.user jodi checked button ey click kore tahole inStockOnly true hobe orthath check button checked hobe.Tahole, inStockOnly jodi true hoy and product.stock jodi false hoy if(inStockOnly && !product.stocked) {return;} tahole je product gulo stock ey nai se gula show korar doarkar nai...
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
