
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Welcome text="Welcome to React"/>
          Learn React
        </a>
      </header>
    </div>
  );
}


class Welcome extends Component{
  render(){
    return(
      <h2 className="title">{this.props.text}!!!</h2>
    )
  }
}

export default App;
