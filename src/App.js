
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
          <Welcome text="Welcome to React"/>
          Learn React
      </header>
    </div>
  );
}


class Welcome extends Component{

  state = {
    toggle: true
  }

  render(){
    const {text} = this.props;
    return(
      <div>
      <h2 className="title">{text}!!!</h2>
      <p>This should show and hide</p>
        <button>show/hide</button>
        </div>
    )
  }
}

export default App;
