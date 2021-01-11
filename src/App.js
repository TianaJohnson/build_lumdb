
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './App.css';
import React from 'react';



function App() {
  return (
    <div className="App">
      <Header/>
          <Body/> 
          <div className="push"></div>     
      <Footer/>
    
    </div>
  );
}





export default App;
