import React, { Component } from 'react'
import Red from '../../images/music/red.jpg'
import Imagine from '../../images/music/imaginedragons.jpeg'

const music={
    music1:{name:"Imagine Dragons",image:Imagine},
    music2:{name:"Red",image:Red},
}


class ListMusic extends Component{
    constructor(props){
        super(props)
        this.renderObj=this.renderObj.bind(this)
    }
    
    renderObj = () => { 
       return Object.keys(music).map((obj, i) => {
          return (
            <div>
                <ul>
                    <li>{music[obj].name}</li>
                    <img className="imgArray" src={music[obj].image} alt="imgArray"/>
                </ul>
            </div>
          )})}
    
    render(){
        return(
            <div>
               {this.renderObj()}
            </div>
        )
    }
}

export default ListMusic;