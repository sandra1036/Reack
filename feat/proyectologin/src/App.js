import React, { Component } from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import Music from './pages/music'
import Films from './pages/film';
import login from './complements/login';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Login" component={login} exact />
              <Route path="/Music" component={Music} exact/>          
              <Route path="/Film" component={Films} exact/>         
          </Switch>
        </BrowserRouter>
        

      </div>

    );
  }

}

export default App;