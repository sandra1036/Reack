import React from 'react'
import { Link } from 'react-router-dom'

const handleonSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)    
}
const Dates =()=>(
    <form onSubmit={handleonSubmit}>
                <label>Truk </label><br></br>
                <input
                id='matricula' 
                className="text-bold"
                name='matricula'
                onChange={e=> this.setState({inputMatricula:e.target.value})}
                placeholder='Introduce el matricula'/><br></br>

                <label>Trailer </label><br></br>
                <input 
                id='trailer'
                onChange={e=>this.setState({inputTrailer:e.target.value})}
                className="text-bold"
                name='trailer'
                placeholder='Introduce el trailer'/>
                
                <button>SAVE DATA</button>
                <Link to="/">
                   <button>CANCEL</button>
                </Link>
        </form>
);


export default Dates;