import BaseForm from './baseForm';
import React from 'react';

const Login = props => {

  return(
    <BaseForm hasLogin={props.hasLogin} toggleLogin={props.toggleLogin}/>
  )
}

export default Login