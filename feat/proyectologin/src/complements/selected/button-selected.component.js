import React from 'react'
import "./button-selected.style.css"
import CaratulaImg from '../../images/selected/caratula.jpg'
import MusicaImg from '../../images/selected/vinilo.png'
import {withRouter} from 'react-router'



const ButtonSelected=({history})=>{

    function handleClickMusic(){  
        history.push("/Music")
    }
    
    function handleClickFilm(){
        history.push("/Film")
    }

    return(
        <div>
            <img className="img" onClick={handleClickFilm} src={CaratulaImg} alt="CaratulaImg"/>
            <img className="img" onClick={handleClickMusic} src={MusicaImg} alt="MusicaImg"/>
        </div>
    )


}

export default withRouter(ButtonSelected);