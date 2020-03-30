import React,{Component} from 'react'
import {Link, Route} from 'react-router-dom'
import '../../App.css';
class Navbar extends Component{
  render(){
      return(
        <nav className="nav">
          <div>
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