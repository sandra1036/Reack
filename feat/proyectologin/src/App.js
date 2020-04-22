import React, { Component } from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import Selected from './pages/selected';
import Music from './pages/music'
import Films from './pages/film';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route  path="/" component={Home} exact/>
            <Route  path="/selected" component={Selected} exact/>
                <Route path="/selected/music" component={Music} exact/>
                  <Route path="/selected/music/:musicId"/>
                <Route path="/selected/film" component={Films} exact/>
                 <Route path="/selected/film/:filmId"/>
          </Switch>
        </BrowserRouter>
        

      </div>

    );
  }

}

export default App;