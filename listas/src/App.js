import React, { Component } from 'react';
import { render } from '@testing-library/react';
import cars from './data/cars.json'

class CarItem extends Component{
  render(){
    const {car,id}=this.props
    return(
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )


  }
}




function App() {
    const numbers=[1,1,3,4,5]
    return (
      <div className="App">
        <h4>Trabajando con listas</h4>
        <ul>
          {cars.map(car=>{
              return <CarItem id={car.id} key={car.id} car={car}/>
            })
          }
        </ul>
      </div>
    );
}

export default App;
