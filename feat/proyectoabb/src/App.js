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
            <Route exact path="/truk-data"  component={TrukData} key="trukdata"/>
            <Link to="/truk-data">
              <img src={trukimg} className="image-class" alt="TrukImg"/>              
            </Link>
            
         </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
