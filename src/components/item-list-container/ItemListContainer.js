import React, { useState } from 'react';
import Item from '../item/Item';

const items = [
    {id: "1", name: "nokia", price: "9000"},
    {id: "2", name: "xiaomi", price: "3000"},
    {id: "3", name: "moto", price: "4000"}
];

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const otherFunctions =  () => {
        console.log("other functions");
    }
  return (
  <div>
      <h1>Lista de productos</h1>
      <h3>productos seleccionados</h3>
      <p> {selectedItem ? selectedItem.id : 'Ninguno'} </p>
      <p> {selectedItem ? selectedItem.name : ''} </p>
      <p> {selectedItem ? selectedItem.price : ''} </p>
      {items.map((item) =>(
          <Item key={item.id} {...item} setSelectedItem={setSelectedItem} otherFunctions= {otherFunctions} />
      ))}
  </div>
  );
};

export default ItemListContainer;
