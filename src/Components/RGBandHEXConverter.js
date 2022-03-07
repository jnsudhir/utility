import React  from 'react';
import '../Home';
import { FaTools ,FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

export default function RGBandHEXConverter() {
  function  RGBtoHEX(red,blue,green)
  {
   red = document.querySelector(".redText").value;
   green = document.querySelector(".greenText").value;
   blue = document.querySelector(".blueText").value;
   red = parseInt(red).toString(16);
   green = parseInt(green).toString(16);
   blue = parseInt(blue).toString(16);
   if (red.length == 1)
   red = "0" + red;
   if (green.length == 1)
   green = "0" + green;
   if (blue.length == 1)
   blue = "0" + blue;
   let output = "#" + red + green + blue
  document.querySelector(".hexoutput").value = output;
  let q = document.querySelector(".hexoutput").value;
  document.getElementById("res1").style.background = q;
  document.querySelector(".hexoutput").value = output
  }
  function HEXtoRGB()
  {
    var hex = document.querySelector(".hexCode").value;
    var red = parseInt(hex[1]+hex[2],16);
    var green = parseInt(hex[3]+hex[4],16);
    var blue = parseInt(hex[5]+hex[6],16);
    document.querySelector(".redValue").value = red;
    document.querySelector(".greenValue").value = green;
    document.querySelector(".blueValue").value = blue;
    let op = "RGB( " + red + " " + green + " " + blue + ")";
    document.querySelector(".rgbOutput").value = op;
    document.getElementById("result-rgb").style.background = hex;
  }
  return (
    <>
    <heading >
      <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
    </heading>
      <div className='rgb-hex-container'>
        <span>
          <h3>RGB to HEX Converter</h3>
        </span>
        <label className='redlabel'><span>  Red:  </span>
          <input  type='text' className='redText red-text-box' placeholder='0 to 255'/>
        </label>
        <br/>
        <label className='greenlabel'><span>Green:  </span>
          <input  type='text' className='greenText green-text-box' placeholder='0 to 255'/>
        </label>
        <br/>
        <label className='bluelabel'><span>Blue:  </span>
          <input  type='text' className='blueText blue-text-box' placeholder='0 to 255'/>
        </label>
        <br/>
        <input type='button' className='rgb-button' onClick={RGBtoHEX} value='Convert' />
        <br/>
        <input type='text' className='hexoutput rgb-text-box'  placeholder='HEX Value' /> 
        <div className='output-container'>
          <div className='result' id="res1" />
        </div>
      </div>
      <div className='rgb-hex-container'>
        <h3>HEX to RGB Converter</h3>
        <label className='hexCode-heading'>HEX Code:
          <input type='text' className='hexCode' placeholder='#RRGGBB'/>
        </label>
        <div>
          <h4 className='rgbHeading'>RGB Code</h4>
          <input type='text' className='redValue' />
          <input type='text' className='greenValue' />
          <input type='text' className='blueValue' />
          {/* <label>RGB Code:
          <input type='text' />
          <input type='text' />
          <input type='text' />
          </label> */}
        </div>
        <div className='result-container'>
          <div className='rgbResult' id='result-rgb' />
        </div>
        <input type='button' onClick={HEXtoRGB} className="hexToRGB-btn" value='convert'/>
        <input type='text' className='rgbOutput' placeholder='RGB(0,0,0)' />



      </div>
      
    </>
  );
}
