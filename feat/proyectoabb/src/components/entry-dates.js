import React,{Component} from 'react'

class Dates extends Component{
    render(){
        return(
            <form>
                <label>Truk </label><br></br>
                <input 
                className="text-bold"
                name='matricula'
                placeholder='Introduce el matricula'
                /><br></br>
                <label>Trailer </label><br></br>
                <input 
                className="text-bold"
                name='trailer'
                placeholder='Introduce el trailer'/>
                
            </form>
        )

    }
}

export default Dates;