import './Buttons.css'
import React from 'react';

class Buttons extends React.Component{
    isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
      };
    render(){
        return(
            <div  className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}
            onClick={() => this.props.handleclick(this.props.children)}>
                {this.props.children}
            </div>
        );
    };
}

export default Buttons;