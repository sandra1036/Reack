import React,{Component} from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../../App.js'

class Dates extends Component{
handleonSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        
}

    render(){
        return(
            <form onSubmit={this.handleonSubmit}>
                <label>Truk </label><br></br>
                <input
                id='matricula' 
                className="text-bold"
                name='matricula'
                onChange={e=> this.setState({inputMatricula:e.target.value})}
                ref={inputElement=>this.inputName=inputElement}
                placeholder='Introduce el matricula'
                /><br></br>

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
        )

    }
}

export default Dates;