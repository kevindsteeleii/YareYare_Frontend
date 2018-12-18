import BaseForm from './baseForm';
import React from 'react';

const Signup = props => {
  return (
    <BaseForm hasLogin={props.hasLogin} toggleLogin={props.toggleLogin}/>
  )
}

export default Signup