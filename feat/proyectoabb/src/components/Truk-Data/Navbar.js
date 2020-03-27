import React,{Component} from 'react'
import {Link, Route} from 'react-router-dom'
import '../../App.css';
import Home from '../../App.js'
class Navbar extends Component{
  render(){
      return(
          <nav className="nav">
          <div>
            <Route exact path="/"  component={Home} key="home"/>
              <Link to="/" >
                <button className="nav-button">Back</button>
              </Link>
          </div>
          <p>Truk data</p>
        </nav>
      )
  }
}
export default Navbar;