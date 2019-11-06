import React from 'react'
import './Content.css'

function Content( props ) {

  return (
    <div className="Content">
      
      <p>
        The String Visualizer App saves you precious time when it comes to
        deleting certain parts of a text.
      </p>
      <ul>
        <li>Enter your text in the input below.</li>
        <li>After that, just <strong>click</strong> any letter/character and it will be removed from your text.</li>
        <li>You can also drag and drop letters from the <strong>side bar</strong> directly in the string visualizer.</li>
        
        </ul>

      <textarea rows="8" onChange={ props.changeHandler } value={ props.input }></textarea>
    </div>
  );
}

export default Content;