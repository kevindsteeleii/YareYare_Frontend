import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './forms/login';
import Signup from './forms/signup';
import Main from './containers/main'
import main from './_css/main.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasLogin: true
    }
  }

  toggleLoginForm = evt => {
    this.setState({ hasLogin: !this.state.hasLogin})
  }

  render() {
    const { auth } = this.props
    const { hasLogin,  } = this.state
    return (
      <Router>
        <div className={main.globalStyle}>
          { auth
            ? <Route to='/main'
           render ={(props) => <Main{...props}/>}/> 
            : hasLogin
              ? <Route to='/login' 
                render={(props) => <Login {...props} hasLogin={hasLogin} toggleLogin={this.toggleLoginForm} />} />

              : <Route to='/signup' 
                render= {(props)=> <Signup {...props} hasLogin={hasLogin} toggleLogin={this.toggleLoginForm}/>} />
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { base } = state
  return {
    auth: base.auth
  }
}

export default connect(mapStateToProps)(App);
