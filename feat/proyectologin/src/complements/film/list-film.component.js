import React, { Component } from 'react'
import './film.style.css'
import Fast from '../../images/films/FastFurious.jpg'
import Jumanji from '../../images/films/Jumanji.jpg'
import Hobbit from '../../images/films/Hobbit.jpg'

const film={
    film1:{name:"Fast & Furious",image:Fast},
    film2:{name:"Jumanji",image:Jumanji},
    film3:{name:"The Hobbit",image:Hobbit},
}

class ListFilm extends Component{
    constructor(props){
        super(props)
        this.renderObj=this.renderObj.bind(this)
    }
    
    renderObj = () => { 
       return Object.keys(film).map((obj, i) => {
          return (
            <div>
                <ul>
                    <li>{film[obj].name}</li>
                    <img className="imgArray" src={film[obj].image} alt="imgArray"/>
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

export default ListFilm;