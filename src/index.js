import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import {Route, Switch} from 'react-router-dom';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Eux from "./hoc/Eux/Eux";


const stripePay = asyncComponent(() => {
    return import ('./Connect/Connect');
});

const app = (
    <BrowserRouter basename="/">
        <App/>

    </BrowserRouter>

);


ReactDOM.render(app,document.getElementById('root'));
