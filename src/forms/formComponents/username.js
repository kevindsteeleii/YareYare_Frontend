import React from 'react';
import '../../_css/main.css';

const Username = props => {
  return (
    <>
    <input type='text'
      name='username'
      placeholder='username'
      style={{
        width: '250px',
        height: '30px',
        fontSize: '1.6rem',
        borderRadius: '5px'
      }}
      onChange={props.onChange}
    />
    </>
  )
}

export default Username