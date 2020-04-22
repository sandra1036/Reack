import React from 'react'
import './music.style.css'
import ListMusic from './list-music.component'


const MusicComponent=()=>{
    return(
        <div>
            <p className="text-bold">Music</p>
            <ListMusic/>
        </div>
    )


}


export default MusicComponent;