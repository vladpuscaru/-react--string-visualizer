import React from 'react'
import Char from '../Char/Char'
import './Visualizer.css'

function Visualizer( props ) {
  const chars = props.input.split('');

  const charsJSX = chars.map((char, index) => {
    return (
      <Char 
        char = { char } 
        key = { index } 
        clickHandler = { () => props.clickHandler(index) } />
    );
  });

  return (
    <div className="Visualizer">
      { charsJSX }
    </div>
  );
}

export default Visualizer;