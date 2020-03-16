import React from 'react';
import { render } from '@testing-library/react';


function App() {
    const numbers=[1,1,3,4,5]
    return (
      <div className="App">
        <h4>Trabajando con listas</h4>
        {numbers.map((number,index)=>{
          return <p key={index}>Soy el numero {number}</p>
        })}
      </div>
    );
}

export default App;
