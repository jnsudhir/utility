import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTools ,FaHeart } from 'react-icons/fa';

export default function DectoBin() {
  function decToBinConvert()
  {
    let num = parseInt(document.querySelector('.textInput').value);
    document.querySelector('.textOutput').value = num.toString(2);
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
        <h3>Decimal to Binary Converter</h3>
          <input type='text' className='textInput' placeholder='Enter Decimal Input' />
          <input type='button' className='convert-Btn' value='Convert' onClick={decToBinConvert} />
          <input type='button' className='convert-Btn' value='Reset' onClick={reset} />
          <input type='text' className='textOutput'  />
        </div>


    </>
  )
}
