import React, { Component } from 'react'
import {withRouter} from 'react-router'
import Red from '../../images/music/red.jpg'
import Imagine from '../../images/music/imaginedragons.jpeg'

const music={
    music1:{id:1,name:"Imagine Dragons",image:Imagine},
    music2:{id:2,name:"Red",image:Red},
}

class ListMusic extends Component{
    constructor(props,history){
        super(props)
        this.history=history
        this.renderObj=this.renderObj.bind(this)

    }

    renderObj =()=> { 
       return Object.keys(music).map((obj, i) => {
          return(
            <div>
                <ul key={music[obj].id} onClick={({history,math})=>{history.push(`${math.url}/:id`)}}>
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

export default withRouter(ListMusic);