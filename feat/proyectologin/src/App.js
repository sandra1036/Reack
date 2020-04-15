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
            <Route exact path="/" component={Home} />
            <Route exact path="/selected" component={Selected} />
          </Switch>
        </BrowserRouter>
        

      </div>

    );
  }

}

export default App;