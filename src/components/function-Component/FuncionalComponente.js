import React, { useState } from 'react';

const FuncionalComponente = ({name, age}) => {

  const [stateName, setStateName] = useState("pedro");
  const [stateSurname, setStateSurname] = useState("compon");
  const [user, setUser] = useState({
    name: "otto",
    surname: "apagalo"
  });

  const updateNameAndSurname2 = () => {
    setStateName("cambioName2");
    setStateSurname("cambioSurname2");
    setUser({ ...user, name: "controladoName"});

  }

 
  return (<div>
      
      <h1>Function Component. Nombre: {name} Edad: {age}</h1>
      
      <hr></hr>
      <h2>State name USER : {user.name} </h2>
      <h2>State name SURNAME : {user.surname} </h2>
      <h2>stateName : {stateName} </h2>
      <h2>stateSurname : {stateSurname} </h2>
      <button onClick={updateNameAndSurname2}>Cambiar state propos</button>
      <hr></hr>
    
  </div>);
};

export default FuncionalComponente;
