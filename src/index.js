import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import baseReducer from './reducer/baseReducer';
import todoFormReducer from './reducer/todoFormReducer';
import * as serviceWorker from './serviceWorker';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  base: baseReducer,
  todo: todoFormReducer
});

// doesn't work
// window.addEventListener('close', () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('user');
// })

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
