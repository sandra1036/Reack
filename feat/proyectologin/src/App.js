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
                <Route path="/music" component={Music} exact/>
                <Route path="/film" component={Films} exact/>
            
            

          </Switch>
        </BrowserRouter>
        

      </div>

    );
  }

}

export default App;