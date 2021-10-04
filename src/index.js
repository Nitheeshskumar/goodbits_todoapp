import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes from "./Modules/Core/Routes";
import reportWebVitals from './reportWebVitals';
import './Assets/Main.css'
import './Assets/Main.scss'
import 'bulma/css/bulma.css';

ReactDOM.render(
  <React.StrictMode>
   <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
