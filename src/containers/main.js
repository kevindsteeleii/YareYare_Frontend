import { connect } from "react-redux";
import * as _actions from "../actions/baseActions";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Main extends Component {
  state = {
    tasks: this.props.tasks
  }

  handleTasksLoader = evt => {
    evt.preventDefault();
    const { user, token, getTasks } = this.props;
    getTasks(user.id, token);
  }

  handleLogout = evt => {
    // evt.preventDefault();
    this.props.logoff()
  }

  render(){
    return (
    <>
    
      Main Page
      <br/>
      <button onClick={this.handleTasksLoader}>Get Tasks</button>
      <Link to="/login" onClick={this.handleLogout}>
        <button>LogOut</button>
      </Link>
      
    </>
  )}
}

const mapStateToProps = state => {
  const { base } = state
  return {
    user: base.user,
    token: base.token,
    todos: base.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTasks: (userId, token) => dispatch(_actions.getTasks(userId, token)),
    changeFormMode: (formMode) => dispatch(_actions.changeFormMode(formMode)),
    logoff: () => dispatch(_actions.logoff())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);