import { connect } from "react-redux";
import React, { Component } from "react";
import Username from "./formComponents/username";
import Email from "./formComponents/email";
import Password from "./formComponents/password";
import LinkButton from "../components/linkButton";
import * as _actions from "../actions/baseActions"

class BaseForm extends Component {

  state = {
    username: "",
    email: "",
    password: ""
  };

  // _FIXME: this needs to "Link" to the main protected route, the redirect will work either way b/c of how it's made

  onSubmit = evt => {
    evt.preventDefault();

    const { loginAndSignup, path } = this.props;
    let user = {username: evt.target.username.value, password: evt.target.password.value };

    let type = path === '/login' ? "LOGIN" : "SIGNUP";

    if (evt.target.email){
      user.email = evt.target.email.value;
    }
    
    loginAndSignup(type, user);

    evt.target.username.value = "";
    evt.target.password.value = "";
    
    if (evt.target.email){
      evt.target.email.value = "";
    }
  }
  
    onFieldChange = evt => {
      evt.preventDefault();
      let targetName = evt.target.name;
      switch (evt.target.name) {
        case "username":
        case "email":
        case "password":
          this.setState({[targetName]: evt.target.value});
          break;
  
        default:
          console.error("Invalid input entry.");
          break;
      }
    }
  
    render () {
      const path  = this.props.path === "/login"? "/signup": "/login";

      return (
        <>
          <div className="entryFormDiv">
          <form onSubmit={this.onSubmit} >
            <div className="entryFormStyle" >
              <Username
              style={{
                position: "absolute",
                margin: "0 auto",
                width: "100%"
              }}
              onChange={this.onFieldChange}/>
              {this.props.path === "/signup" && <Email onChange={this.onFieldChange}/>}
              <Password onChange={this.onFieldChange}/>
            </div>

            <div
            style={{
              position: "absolute",
              zIndex: "3",
              width: "100%",
              top: "180px",
            }}>

              <LinkButton 
                className="buttonStyle"
                style={{
                  backgroundColor:"blue",
                  float: "left",
                  marginLeft: "20px"
                }}
              to={path}/>

              <button 
              value="submit"
              className="buttonStyle"
              style={{
                backgroundColor: "red",
                color: "white",
                border: "2.5px solid white",
                float: "right",
                marginRight: "20px"
              }}
              >
                Submit
              </button>
          </div> 
          </form>
            
          </div>
        </>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAndSignup: (type, userObj) => dispatch(_actions.loginAndSignup(type, userObj))
  }
}

export default connect(null, mapDispatchToProps)(BaseForm);