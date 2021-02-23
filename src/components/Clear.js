import React from 'react';
import './Clear.css'

class Clear extends React.Component{
    render(){
        return(
            <div className="clear-btn" onClick={() => this.props.handleclick(this.props.children)}>
                {this.props.children}
            </div>
        );
    };
}

export default Clear;