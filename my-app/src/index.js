import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";



import './index.css';
import App from './App';



import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
        <App />
    </Router>
  
);

