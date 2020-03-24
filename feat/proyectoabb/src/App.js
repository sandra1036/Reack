import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Personal from './components/Personal'
import Dates from './components/entry-dates' 
class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div>
          <p className="App-flex">
            <label>Name </label><br></br>
            <Personal name="Eduardo"/>
          </p>
          <p className="App-flex">
            <label>Last Name </label><br></br>
            <Personal className="text-bold" name="Santamaria Garcia"></Personal>
          </p>
          <p className="App-flex">
          <Dates/>
          </p>
          
          <div>
            <button>SAVE DATA</button>
            <button >CANCEL</button>
            </div>
      </div>
      </div>
    
    );
  }
}

export default App;
