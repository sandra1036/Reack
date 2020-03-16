import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends Component{
  render(){
    return <h1>{this.props.text}</h1>
  }
}
Title.defaultProps={
  text:'Titulo por defecto'
}

function App() {
  return (
    <div className="App">
     <Title text='Otro titulo'/>
    </div>
  );
}

export default App;
