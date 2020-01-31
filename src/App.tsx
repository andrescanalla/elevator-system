import React from 'react';
import './App.css';
import Building from './models/buildingModel'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          KindaLab: Elevator System
        </p>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-2">
            Log component
          </div>
          <div className="col-10">
            <Building  floors={50}  nElevators={3} hasBasement={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
