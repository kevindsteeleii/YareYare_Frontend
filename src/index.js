import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import baseReducer from './reducer/baseReducer';
import todoFormReducer from './reducer/todoFormReducer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  base: baseReducer,
  todo: todoFormReducer
});

const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Route path='/' component={App}/>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
