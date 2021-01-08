import React, { Component } from 'react';
import './App.css';


class Body extends Component {
    render() {
        return (
            <div className="body-main">
                <h2 className="input-header">What is it?</h2>
               
                <input className="input-main"/>
                <button className="input-button">Add!</button>

                
            </div>
         )
    }
}


export default Body;