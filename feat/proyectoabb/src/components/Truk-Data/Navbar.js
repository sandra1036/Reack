import React,{Component} from 'react'
import { BrowserRouter,Link, Switch } from 'react-router-dom'
import '../../App.css';
class Navbar extends Component{
  render(){
      return(
          <nav className="nav">
          <BrowserRouter>
            <Switch>
              <Link to="/" >
                <button className="nav-button">Back</button>
              </Link>
            </Switch>
          </BrowserRouter>
          <p>Truk data</p>
        </nav>
      )
  }
}
export default Navbar;