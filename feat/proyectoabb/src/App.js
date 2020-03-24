import React from 'react';
import './App.css';

function App() {
  return (
  
    <div className="App">
      <div>
      <nav className="nav">
        <p>Truk data</p>
      </nav>
      </div>
      <div>
        <p className="App-flex">
          <label>Name </label><br></br>
          <label className="text-bold">Eduardo</label>
        </p>
        <p className="App-flex">
          <label>Last Name </label><br></br>
          <label className="text-bold">Santamaria garcia</label>
        </p>
        <p className="App-flex">
          <label>Truk </label><br></br>
          <input 
            className="text-bold"
            name='matricula'
            placeholder='Introduce el matricula'

          />
        </p>
        <p className="App-flex">
          <label>Trailer </label><br></br>
          <input 
            className="text-bold"
            name='trailer'
            placeholder='Introduce el trailer'

          />
        </p>
        <div>
          <button >SAVE DATA</button>
          <button >CANCEL</button>
          </div>
     </div>
    </div>
   
  );
}

export default App;
