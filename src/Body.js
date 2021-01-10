import React, { Component } from 'react';
import './App.css';


class Body extends Component {
    render() {
        return (
            <div className="body-main">
                <h2 className="input-header">What is it?</h2>
               
                <input className="input-main" type="text"/>
                <button className="input-button"
                onClick={this.addition}>Add!</button>

                
            </div>
         )
    }
}


export default Body;