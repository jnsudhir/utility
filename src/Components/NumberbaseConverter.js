import React from 'react';
import '../Home';
import { NavLink } from 'react-router-dom';
import { FaTools ,FaHeart } from 'react-icons/fa'


export default function NumberbaseConverter() {
  return (
   <>
    <heading >
            <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
    </heading>
    <card className='fcontainer2'>
    <NavLink className="DectoBinary" to="/DectoBin"  > <h4 ><strong><b>Decimal to Binary Converter</b></strong></h4></NavLink>
    <NavLink className="DectoH" to="/DectoHex"  > <h4 ><strong><b>Decimal to Hex Converter</b></strong></h4></NavLink>
    <NavLink className="DectoOctal" to="/DectoOctal"  > <h4 ><strong><b>Decimal to Octal Converter</b></strong></h4></NavLink>
    <NavLink className="BintoDec" to="/BinarytoDecimal"  > <h4 ><strong><b>Binary to Decimal </b></strong></h4></NavLink>
    <NavLink className="BintoHex" to="/BinarytoHex"  > <h4 ><strong><b>Binary to Hex Converter</b></strong></h4></NavLink>
    <NavLink className="BintoOctal" to="/BinarytoOctal"  > <h4 ><strong><b>Binary to Octal Converter</b></strong></h4></NavLink>
    <NavLink className="HextoBin" to="/HextoBinary"  > <h4 ><strong><b>Hex to Binary Converter</b></strong></h4></NavLink>
    <NavLink className="HextoDec" to="/HextoDecimal"  > <h4 ><strong><b>Hex to Decimal Converter</b></strong></h4></NavLink>
    <NavLink className="HextoOctal" to="/HextoOctal"  > <h4 ><strong><b>Hex to Octal Converter</b></strong></h4></NavLink>
    <NavLink className="OctaltoBin" to="/OctaltoBinary"  > <h4 ><strong><b>Octal to Binary Converter</b></strong></h4></NavLink>
    <NavLink className="OctaltoHex" to="/OctaltoHex"  > <h4 ><strong><b>Octal to Hex Converter</b></strong></h4></NavLink>
    <NavLink className="OctaltoDec" to="/OctaltoDecimal"  > <h4 ><strong><b>Octal to Decimal Converter</b></strong></h4></NavLink>

    </card>
    <footer className="footer">
            <p>Designed with  < FaHeart />  by Sudhir  </p>
    </footer>
   </>
  )
}
