import React, { Component } from 'react';
import './App.css';


class Body extends Component {

    submit = () => {
        console.log("Submit")
    }

    render() {
        return (
            <div className="body-main">
                <h2 className="input-header">What is it?</h2>
               
                <input className="input-main" type="text" ref={(input) => this.text = input}/>
                <button className="input-button"
                onClick={this.submit}>Add!</button>

                
            </div>
         )
    }
}


export default Body;