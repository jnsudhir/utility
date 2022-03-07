import React from 'react';
import '../Home';
import { FaTools ,FaHeart } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function UnitConverters() {
  return (
    <>
        <heading >
            <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
        </heading>
        <header>
            <NavLink className="lengthConvert" to="/LengthConverter"  > <h4 ><strong><b>Length Converter</b></strong></h4></NavLink>
            <NavLink className="temperatureConvert" to="/TemperatureConverter"  > <h4 ><strong><b>Temperature Converter</b></strong></h4></NavLink>
            <NavLink className="weightMassConvert" to="/WeightandMassConverter"  > <h4 ><strong><b>Weight and Mass Converter</b></strong></h4></NavLink>
        </header>
    </>
  )
}
