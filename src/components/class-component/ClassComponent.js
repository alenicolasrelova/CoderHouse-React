import React, { Component } from 'react';
export class ClassComponent extends Component {
    
    render() {
        console.log("prop classComponent " + this.props.name + " " + this.props.age);
        return (
            <>
            <div>
                <h1>ClassComponent</h1>
                <h2>nombre: {this.props.name} edad : {this.props.age}</h2>
            </div>
            </>
        );
    }

}

