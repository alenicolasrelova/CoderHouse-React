import React from 'react';

const Item = ({id, name, price, setSelectedItem, otherFunctions}) => {
    const selectedItem = () => setSelectedItem({id, name, price});
  return (
  <div>
      <h3>nombre : {name}</h3>
      <h3>Precio : {price}</h3>
      <button onClick= {selectedItem}>Seleccionar producto</button>
      <button onClick={otherFunctions}>Imprimir en consola</button>
  </div>
  );
};

export default Item;



    