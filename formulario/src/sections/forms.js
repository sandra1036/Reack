import React, {Component} from 'react'

export default class Forms extends Component{
    handleonSubmit=(e)=>{
        e.preventDefault()
        const name=this.inputName.value
        const email=document.getElementById('twitter').value
        console.log({name,email})
        
    }
    render(){
        return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleonSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce el nombre'
                            ref={inputElement=>this.inputName=inputElement}/>
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu Twitter'/>
                    </p>
                    <button >Enviar</button>
                </form>
            </div>
        )
    }
}