import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Profile from './pages/Profile'
import Artist from './pages/Artist'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
         <Route path="/" component={Home} key="Home" exact />
         <Route path="/profile" component={Profile} exact  />
         <Route path="/music" component={Music} key="Music" exact />
         <Route path="/artist" compoent={Artist} key="Artist" exact />
         <Route path="/others" key="Others" exact />
        </Switch>
         
      </BrowserRouter>
    );
  }

}

export default App;
