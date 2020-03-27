import React,{Component} from 'react'

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
                onChange={e=> this.setState({inputMatr:e.target.value})}
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
                
            </form>
        )

    }
}

export default Dates;