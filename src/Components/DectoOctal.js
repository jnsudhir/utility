import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTools ,FaHeart } from 'react-icons/fa'

export default function DectoOctal() {
  function decToOctalConvert()
  {
    let num = parseInt(document.querySelector('.textInput').value);
    document.querySelector('.textOutput').value = num.toString(8);
  }


  function reset()
  {
    let q = ' ';
    document.querySelector('.textInput').value = q
    document.querySelector('.textOutput').value = q
  }
  return (
    <>
        <heading >
            <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
        </heading>
        <div className="encode-decode">
        <h3>Decimal to Octal Converter</h3>
          <input type='text' className='textInput' placeholder='Enter Decimal Input' />
          <input type='button' className='convert-Btn' value='Convert' onClick={decToOctalConvert} />
          <input type='button' className='convert-Btn' value='Reset' onClick={reset} />
          <input type='text' className='textOutput'  />
        </div>
    </>
  )
}
