import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

import {Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

const createStroeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStroeWithMiddleware(reducers)} >
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));

