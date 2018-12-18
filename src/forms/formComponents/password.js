import React from 'react';
import '../../_css/main.css';

const Password = props => {
  return (
    <>
      <input
        name='password'
        type='password'
        placeholder='password'
        style={{
          marginTop: '20px',
          width: '250px',
          fontSize: '1.3rem',
          borderRadius: '5px'
        }}
        onChange={props.onChange}
      /> 
    </>
  )
}

export default Password