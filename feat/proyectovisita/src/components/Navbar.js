import React,{Component} from 'react'
import HomeImg from '../image/home_icon.png'

class Navbar extends Component{
    render(){
        return(
            <nav className="nav">
                <img src={HomeImg} className="img" alt="HomeImg"/>
                <button className="button-form">Perfil</button>
                <button className="button-form">Music</button>
                <button className="button-form">Algo</button>

            </nav>
        )
    }
}

export default Navbar