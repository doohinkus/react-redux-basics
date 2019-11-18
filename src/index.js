import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import { messageReducer } from './ducks/messageDuck';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Apply middleware
// This middleware lets us see how the store changes via console logs
const middleware = applyMiddleware(logger);

// Now we create the store, using our reducers
const messageStore =  createStore(messageReducer, middleware);


ReactDOM.render(<Provider store={messageStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
