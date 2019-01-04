import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PrivateRoute from './containers/privateRoute';
import Login from './forms/login';
import Signup from './forms/login'; // signup is an illusion a mirror-mirror of the login with some conditional finagling
import Main from './containers/main';
import main from './_css/main.css';

class App extends Component {

  render() {
    return (<>
        <div className={main.globalStyle}>
          <Route path='/login' render={(props)=> <Login {...props}/>} />
          <Route path='/signup' render={(props)=> <Signup {...props}/>} />
          <PrivateRoute path='/main' component={Main} />
        </div>
      </>
    );
  }
}

export default connect(null)(App);
