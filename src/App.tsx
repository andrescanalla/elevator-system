import React from 'react';
import './App.css';
import Building from './components/building'
import setting from './setting'

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
          <div className="col">
            <Building  floors={setting.building.floors}  nElevators={3} hasBasement={setting.building.hasBasement}/>
          </div>
        </div>
       
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" ></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" ></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" ></script>
      </div>
      
    </div>
    
  );
}

export default App;
