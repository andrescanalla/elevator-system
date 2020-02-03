import React from 'react';
import './App.css';
import Building from './components/building/building'
import setting from './setting'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="p">
          KindaLab: Elevator System
        </p>
      </header>
      <div className="container">
        <div className="row">
          <div className="col">
            <Building floors={setting.building.floors} nElevators={3} hasBasement={setting.building.hasBasement} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
