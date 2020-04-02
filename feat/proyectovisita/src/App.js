import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'

class App extends Component {
  render(){
    return (
      <BrowserRouter >
         <Route path="/" component={Home} key="Home"/>


      </BrowserRouter>
    );
  }

}

export default App;
