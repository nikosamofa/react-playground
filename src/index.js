import React from 'react';
import ReactDOM from 'react-dom';
import App from './paltrows-power-toes/App';
import './index.css';
import './state-drills/HelloWorld'
import  './state-drills/Bomb'
import './state-drills/RouletteGun';
import {BrowserRouter} from 'react-router-dom'



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));