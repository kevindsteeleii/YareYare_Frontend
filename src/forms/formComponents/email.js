import React from 'react';
import '../../_css/main.css';

const Email = props => {
  return (
    <>
      <input
        name='email'
        type='text'
        placeholder='email'
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

export default Email