import React from 'react'
import "./button-selected.style.css"
import CaratulaImg from '../../images/selected/caratula.jpg'
import MusicaImg from '../../images/selected/vinilo.png'
import {createBrowserHistory} from 'history'


const history=createBrowserHistory()
const handleClickMusic=()=>{
    return(   
        history.push("/music")
    )
}

const ButtonSelected=()=>{
    return(
        <div>
            <img className="img" src={CaratulaImg} alt="CaratulaImg"/>
            <img className="img" onClick={handleClickMusic} src={MusicaImg} alt="MusicaImg"/>
        </div>
    )


}

export default ButtonSelected;