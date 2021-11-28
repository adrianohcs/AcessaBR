import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import Header from './components/Header'
import Home from './pages/Home';

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city="Goiânia" state="GO" />
      <Home />
    </div>

  </div>
  ,
  document.getElementById('root')
);