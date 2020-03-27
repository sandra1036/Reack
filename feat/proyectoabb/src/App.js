import React, { Component } from 'react';
import './App.css'; 
import trukimg from './images/Truk.png'
import TrukData from './pages/TrukData.js'
import { BrowserRouter,Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render(){
    return (
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/TrukData"  component={TrukData} key="trukdata"/>
            <Link to="/TrukData">
              <img src={trukimg} className="image-class" alt="TrukImg"/>              
            </Link>
         </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
