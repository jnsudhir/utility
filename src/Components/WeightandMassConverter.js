import React from 'react';
import { FaTools ,FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function WeightandMassConverter() {
  return (
    <>
      <heading >
            <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
      </heading>
      <main>
        <label>
          Enter Input value :
          <input type="text" placeholder="Enter input value" />
        </label>
        <label>
          From :
          <select>
            <option selected value="gram">
              Gram
            </option>
            <option value="pound">Pound</option>
            <option value="kiloGram">KiloGram</option>
          </select>
        </label>
        <label>
          To :
          <select>
            <option selected value="gram">
            Gram
            </option>
            <option value="pound">Pound</option>
            <option value="kiloGram">KiloGram</option>
          </select>
        </label>
        <label>
          Result :
          <input type="text" placeholder="output" />
        </label>
      </main>
    </>
  )
}
