
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
          <Welcome/>
          Learn React
      </header>
    </div>
  );
}


class Welcome extends Component{

  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log("component will mount")
  }

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
 
    return(
      <div>
      <h2 className="title">Welcome to React</h2>
      
      {this.state.toggle && 
      <p>This should show and hide</p>
  }
        <button onClick= {this.toggle}>show/hide</button>
        </div>
    )
  }
}

export default App;
