import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';
import { BrowserRouter } from 'react-router-dom'

const auth = new Auth();

let state = { };
window.setState = (changes) => {
  state=Object.assign({}, state, changes);

  ReactDOM.render(
    <BrowserRouter>
    <App {...state}/>
  </BrowserRouter>, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0*/

let userName = auth.getProfile().given_name || '';
let pic = auth.getProfile().picture || 'https://i.imgur.com/eV2zDQj.jpg';

let initialState = {
  name: userName,
  pic,
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
};

window.setState(initialState);

registerServiceWorker();
