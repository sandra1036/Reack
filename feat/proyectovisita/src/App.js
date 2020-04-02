import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music.js'
class App extends Component {
  render(){
    return (
      <BrowserRouter >
        <Switch>
         <Route path="/" component={Home} key="Home"/>
         <Route path="/music" component={Music} key="Music"/>
         <Route path="/artist" key="Artist" />
         <Route path="/others" key="Others"/>
        </Switch>
         
      </BrowserRouter>
    );
  }

}

export default App;
