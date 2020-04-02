import React,{Component} from 'react'
import HomeImg from '../image/home_icon.png'
import { Link } from 'react-router-dom'


class Navbar extends Component{

handleonClick(){
    return(
        console.log("hola")        
    )
}
    
    render(){
        return(
            <nav className="nav">
                <img src={HomeImg} className="img" alt="HomeImg"/>
                <button className="button-form">Profile</button>
                <button className="button-form" name="music" onClick={this.handleonClick}>Music</button>
                <button className="button-form">Artist</button>
                <button className="button-form">Others</button>
            </nav>
        )
    }
}

export default Navbar