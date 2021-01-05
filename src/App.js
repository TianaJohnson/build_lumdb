
import logo from './logo.svg';
import Header from './Header'
import './App.css';
import { Component } from 'react';



function App() {
  return (
    <div className="App">
      <Header/>
          <Welcome/>
        
    </div>
  );
}


class Welcome extends Component{

  constructor(props){
    super(props);
    console.log('constructor', props)
  }

  // componentWillMount(){
  //   console.log("component will mount")
  // }

  // componentDidMount(){
  //   console.log('mounted');
  // }

// ^these are no longer used

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
