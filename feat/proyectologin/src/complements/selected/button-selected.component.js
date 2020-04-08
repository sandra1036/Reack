import React from 'react'
import "./button-selected.style.css"
import CaratulaImg from '../../images/selected/caratula.jpg'
import MusicaImg from '../../images/selected/vinilo.png'


const ButtonSelected=()=>{
    return(
        <div>
            <img className="img" src={CaratulaImg} alt="CaratulaImg"/>
            <img className="img" src={MusicaImg} alt="MusicaImg"/>
        </div>
    )


}

export default ButtonSelected;