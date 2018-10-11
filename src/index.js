import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,browserHistory } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Home from './Pages/HomePage/index';
import HappyToolPage from './Pages/HappyToolPage/index';
import SouvenirPage from './Pages/SouvenirPage/index';
import FishPage from './Pages/FishPage/index';
import "./config.js";

const loginCheck = ()=> {
    if(!sessionStorage.getItem('username')){
        browserHistory.push("/");
    }
}

ReactDOM.render((
    <Router 
        history={browserHistory} 
    >
        <Route path="/" component={App}/>
        <Route path="/home" component={Home} onEnter={loginCheck} />
        <Route path="/souvenir" component={SouvenirPage} onEnter={loginCheck}/>
        <Route path="/games" component={HappyToolPage} onEnter={loginCheck}/>
        <Route path="/fish" component={FishPage} onEnter={loginCheck}/>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
