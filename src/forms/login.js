import BaseForm from "./baseForm";
import React from "react";
// *NOTE: Login is used for both login and signup probably will need reafactoring later, not gonna lie...
const Login = (props) => {

  return(
    <BaseForm path={props.match.path}/>
  )
}

export default Login