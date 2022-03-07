import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTools ,FaHeart } from 'react-icons/fa';


export default function HextoDecimal() {
  function hexToDecimal()
  {
    var bin = document.querySelector('.textInput').value;
    document.querySelector('.textOutput').value = parseInt(bin , 16).toString(10);
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
          <h3>Hex to Decimal Converter</h3>
          <input type='text' className='textInput' placeholder='Enter Binary Input' />
          <input type='button' className='convert-Btn' value='Convert' onClick={hexToDecimal} />
          <input type='button' className='convert-Btn' value='Reset' onClick={reset} />
          <input type='text' className='textOutput'  />
        </div>
    </>
  )
}
