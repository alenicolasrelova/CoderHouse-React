import React from 'react';

const FuncionalComponente = ({name, age}) => {
  console.log(name + " " + age);
  return (<div>
      
      <h1>Function Component. Nombre: {name} Edad: {age}</h1>
  </div>);
};

export default FuncionalComponente;
