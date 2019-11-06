import React from 'react'
import './Char.css'

function Char( props ) {
  return (
    <div onClick={ props.clickHandler } className="Char">
      { props.char }
    </div>
  );
}

export default Char;