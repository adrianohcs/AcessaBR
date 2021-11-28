import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import Header from './components/Header'
import Home from './pages/Home';

const CONFIG = {
  city: 'Goiânia',
  state: 'GO'
}

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} state={CONFIG.state} />
      <Home city={CONFIG.city}/>
    </div>

  </div>
  ,
  document.getElementById('root')
);