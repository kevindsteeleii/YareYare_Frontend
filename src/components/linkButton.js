import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, className, style })=> {
  const name = to.split('/')[1].toUpperCase();
  return (
    <div
      className={className}
      style={{...style}}
    >
      <Link to={to}>{name}?</Link>
    </div>
  )
}

export default LinkButton;