import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Encode from "./Components/Encode";
import Base64EncodeDecode from "./Components/Base64EncodeDecode";
import Md5HashGenerator from "./Components/Md5HashGenerator";
import SHA1HashGenerator from "./Components/SHA1HashGenerator";
import SHA256HashGenerator from "./Components/SHA256HashGenerator";
import SHA512HashGenerator from "./Components/SHA512HashGenerator";
import IpAddress from "./Components/IpAddress";
import Home from "./Home";
import RGBandHEXConverter from "./Components/RGBandHEXConverter";
import EpochTimeConverter from "./Components/EpochTimeConverter";
import NumberbaseConverter from "./Components/NumberbaseConverter";
import DectoBin from "./Components/DectoBin";
import DectoHex from "./Components/DectoHex";
import DectoOctal from "./Components/DectoOctal";
import BinarytoDecimal from "./Components/BinarytoDecimal";
import BinarytoHex from "./Components/BinarytoHex";
import BinarytoOctal from "./Components/BinarytoOctal";
import HextoBinary from "./Components/HextoBinary";
import HextoOctal from "./Components/HextoOctal";
import HextoDecimal from "./Components/HextoDecimal";
import OctaltoBinary from "./Components/OctaltoBinary";
import OctaltoDecimal from "./Components/OctaltoDecimal";
import OctaltoHex from "./Components/OctaltoHex";
import Mode from "./Components/Mode";
import LengthConverter from "./Components/LengthConverter";
import TemperatureConverter from "./Components/TemperatureConverter";
import WeightandMassConverter from "./Components/WeightandMassConverter";
import UnitConverters from "./Components/UnitConverters";

// import { FaTools ,FaHeart } from 'react-icons/fa';
// import ScriptTag from 'react-script-tag';
export default function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink  to="/Base64EncodeDecode"> Base64EncodeDecode</NavLink>
        <NavLink to="/MD5HashGenerator"> Md5HashGenerator</NavLink>
        <NavLink to="/SHA1HashGenerator"> SHA1HashGenerator</NavLink>
        <NavLink to="/SHA256HashGenerator"> SHA256HashGenerator</NavLink>
        <NavLink to="/SHA512HashGenerator"> SHA512HashGenerator</NavLink>
        <NavLink to="/Encode"> Encode</NavLink>
        
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Base64EncodeDecode" element={<Base64EncodeDecode />} />
        <Route path="/Md5HashGenerator" element={<Md5HashGenerator />} />
        <Route path="/SHA1HashGenerator" element={<SHA1HashGenerator />} />
        <Route path="/SHA256HashGenerator" element={<SHA256HashGenerator />} />
        <Route path="/SHA512HashGenerator" element={<SHA512HashGenerator />} />
        <Route path="/Encode" element={<Encode />} />
        <Route path="/IpAdress" element={<IpAddress />} />
        <Route path="/RGBandHEXConverter" element={<RGBandHEXConverter />} />
        <Route path="/EpochTimeConverter" element={<EpochTimeConverter />} />
        <Route path="/NumberbaseConverter" element={<NumberbaseConverter />} />
        <Route exact path="/DectoBin" element={<DectoBin />} />
        <Route path="/DectoHex" element={<DectoHex />} />
        <Route path="/DectoOctal" element={<DectoOctal />} />
        <Route path="/BinarytoDecimal" element={<BinarytoDecimal />} />
        <Route path="/BinarytoOctal" element={<BinarytoOctal />} />
        <Route path="/BinarytoHex" element={<BinarytoHex />} />
        <Route path="/HextoBinary" element={<HextoBinary />} />
        <Route path="/HextoDecimal" element={<HextoDecimal />} />
        <Route path="/HextoOctal" element={<HextoOctal />} />
        <Route path="/OctaltoBinary" element={<OctaltoBinary />} />
        <Route path="/OctaltoHex" element={<OctaltoHex />} />
        <Route path="/OctaltoDecimal" element={<OctaltoDecimal />} />
        <Route path="/UnitConverters" element={<UnitConverters />} />
        <Route path="/LengthConverter" element={<LengthConverter />} />
        <Route
          path="/TemperatureConverter"
          element={<TemperatureConverter />}
        />
        <Route
          path="/WeightandMassConverter"
          element={<WeightandMassConverter />}
        />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
