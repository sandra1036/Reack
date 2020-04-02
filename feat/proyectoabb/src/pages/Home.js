import React,{Component} from 'react'
import trukimg from '../images/Truk.png'
import qrimg from '../images/qr.jpg'
import '../App.css'; 
import {Link} from 'react-router-dom'
class Home extends Component{
    render(){
        return(
            <div>
                <Link to="/truk-data">
                    <img src={trukimg} className="image-class" alt="TrukImg"/>              
                </Link>
                    <img src={qrimg}  className="image-class" alt="QrImg"></img>
            </div>
        )
    }
}

export default Home;