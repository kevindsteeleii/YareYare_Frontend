import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './forms/login';
import Signup from './forms/signup'
import main from './_css/main.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth: false, //this is where you would figure out whether or not there is a token/user etc
      hasLogin: true
    }
  }

  toggleLoginForm = evt => {
    this.setState({ hasLogin: !this.state.hasLogin})
  }

  render() {
    const { hasLogin, auth } = this.state
    return (
      <Router>
        <div className={main.globalStyle}>
          { auth
            ? <h1>Is authorized</h1> 
            : hasLogin
              ? <Route to='/login' 
                render={(props) => <Login {...props} toggleLogin={this.toggleLoginForm} />} />
                
              : <Route to='/signup' 
                render= {(props)=> <Signup {...props} toggleLogin={this.toggleLoginForm}/>} />
          }
        </div>
      </Router>
    );
  }
}

export default App;
