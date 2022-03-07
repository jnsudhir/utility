import React, { useState } from 'react';
import './Mode.css';
import { MdDarkMode } from "react-icons/md";

export default function Mode() {
    function turnOn()
    {
        darkModeon(!darkModeoff);
    }
    
    let [darkModeoff, darkModeon] = useState(false)
  return (
    <>
    <h5>Dark Mode <MdDarkMode/></h5>
    <div className='dMode'>

        <span >
            <label>On :
                <input type='checkbox' value='on' onClick={turnOn}  className='DarkMode'/>
            </label>
            <label>Off :
                <input type='checkbox' value='off' />
            </label>
        </span>
    </div>
    </>
  )
}
