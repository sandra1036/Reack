import React from 'react';
import logo from './logo.svg';
//import './AppS2.css';
import './App.css';

function Hello(props){
  return <h2>{props.title}</h2>
}

// const Hello=(props)=> <h2></h2>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello desde una funcion"/>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
