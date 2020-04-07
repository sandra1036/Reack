import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Profile from './pages/Profile'
import Artist from './pages/Artist'
import Other from './pages/Other'

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} key="Home" exact />
            <Route path="/profile" component={Profile} key="Profile" exact  />
            <Route path="/music" component={Music} key="Music" exact />
            <Route path="/artist" component={Artist} key="Artist" exact />
            <Route path="/others" component={Other} key="Others" exact />
          </Switch>
      </BrowserRouter>
      </div>

    );
  }

}

export default App;
