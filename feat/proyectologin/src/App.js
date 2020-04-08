import React, { Component } from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import Selected from './pages/selected';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/selected" component={Selected} exact/>
          </Switch>
        </BrowserRouter>
        

      </div>

    );
  }

}

export default App;