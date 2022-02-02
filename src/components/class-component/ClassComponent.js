import React, { Component } from 'react';
export class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            name:"con click esto ",
            surname:"muere"
        };
    }

    updateName= () => {
        this.setState({name: "murio", surname:"x2"})
    }

    
    render() {
        console.log("prop classComponent " + this.props.name + " " + this.props.age);
        return (
            <>
            <div>
                <h1>ClassComponent</h1>
                <div onClick={this.updateName}>
                    nombre del estado {this.state.name} {this.state.surname}
                </div>
                <h2>nombre: {this.props.name} edad : {this.props.age}</h2>
            </div>
            </>
        );
    }

}

