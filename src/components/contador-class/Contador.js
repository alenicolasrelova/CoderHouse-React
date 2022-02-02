import React from 'react';

export default class CuentaClicks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidadClick: 0,
    };
    this.sumaClick = this.click.bind(this);
    this.restaClick = this.click.bind(this);
  }
  click(e) {
    this.setState((prevState) => ({
      cantidadClick: prevState.cantidadClick + 1,
    }));
  }


  render() {
    const { cantidadClick } = this.state;
    return (
      <div>
        <button onClick={this.sumaClick}> + </button>
        <button onClick={this.restaClick}> - </button>
        <h2> Click numero : {cantidadClick}</h2>
      </div>
    );
  }
}

