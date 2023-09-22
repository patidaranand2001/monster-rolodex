// import React from 'react'
import React, { useState } from 'react';
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    const newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleDownClick = () => {
    console.log("uppercase was clicked");
    const newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleColorClick = () => {
    // console.log("uppercase was clicked");
    const newtext = text.trim();
    setText(newtext);
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <div >
      <div className='mb-3'>
      <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading} </h1>

        <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} `} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text}
          onChange={handleOnChange} id="MyBox" rows="8"  ></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to uppercase</button>
      <button className='btn btn-primary mx-2 ' onClick={handleDownClick}>convert to uppercase</button>
      <button className='btn btn-primary mx-2 ' onClick={handleColorClick}>trim text</button>
      <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} min read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </div>

  )
}

