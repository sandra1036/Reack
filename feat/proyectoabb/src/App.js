import React, { Component } from 'react';
import './App.css'; 
import TrukData from './pages/TrukData.js'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Home from './pages/Home.js'

class App extends Component {
  render(){
    return (
        <BrowserRouter>          
          <Switch>
            <Route exact path="/truk-data"  component={TrukData} key="trukdata"/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
