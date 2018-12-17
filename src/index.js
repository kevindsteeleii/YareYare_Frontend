import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './forms/login';
import Signup from './forms/signup';
import baseReducer from './reducer/baseReducer';
import todoFormReducer from './reducer/todoFormReducer';
import * as serviceWorker from './serviceWorker';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  base: baseReducer,
  todo: todoFormReducer
});

const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
