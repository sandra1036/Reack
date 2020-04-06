import React,{Component} from 'react'
import HomeImg from '../image/home_icon.png'
import { Link } from 'react-router-dom'



class Navbar extends Component{

// handleonClick(){
//     return(
//     <Link to="/music">{}</Link>
//         //console.log("hola")  
        

//     )
// }
    
    render(){
        return(
            <nav className="nav">
                <Link to="/">
                    <img src={HomeImg} className="img" alt="HomeImg"/>
                </Link>  
                <Link to="/profile">
                    <button className="button-form">Profile</button>
                </Link>

                <Link to="/music">
                    <button className="button-form">Music</button>
                </Link>

                <Link to="/artist">
                    <button className="button-form">Artist</button>
                </Link>

                <Link to="/others">
                    <button className="button-form">Others</button>
                </Link>
                
            </nav>
        )
    }
}

export default Navbar;