import React, { Component } from 'react';
import logo from './logo.svg';
//import './AppS2.css';
import './App.css';

// function Hello(props){
//   return <h2>{props.title}</h2>
// }

// const Hello=(props)=> <h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render(){
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      
    }=this.props
    // No se pueden modificar this.props.title=<h3>Otra cosa</h3>
    const mappedNumbers=arrayOfNumbers.map(multiply)

    return(
      <div>
        {this.props.title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      
      
      </div>
    )
  }

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello creando un Componente"/>
        <h3>Vamos ha aprender React</h3>
        <p>Hola mundo estoy utilizando React</p>
        <strong>Esto es un Strong</strong>
        <button className="App-button">Hola soy un boton</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener  noreferrer"
        >
          <Text
            arrayOfNumbers={[2,3,10]}
            objectWithInfo={{key:'Frist Value', key2:'otherValue'}}
            number={2}
            text="Texto en String"
            multiply={(number)=>number*4}
            title={<h1>Este es el titulo</h1>}

            />

        </a>
      </header>
    </div>
  );
}

export default App;
