import React, { Component } from 'react';

class App extends Component {
  // constructor(...args){
  //   super(...args)
  // }
  constructor(props){
    super(props)//este método llama al constructor de Component
    //inicializamos el state de nuestro componente
    this.state={mensajeInicial:'mensaje inicial'}
  }
  handleClick=()=>{
    this.setState({mensajeInicial:"mensaje combiado"})

  }
  render(){
    return (
      <div className="App">
        <h4>Ciclo de montaje</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>Cambiar mensaje</button>
      </div>
    );
  }
}
export default App;
