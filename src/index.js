import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json'
import Slider from './Component/inc/Slider';


ReactDOM.render(
  <>
 <BrowserRouter>
    <App/> 
    {/* <Slider /> */}
   
    </BrowserRouter>
    </>,
 
  document.getElementById('root')
);

