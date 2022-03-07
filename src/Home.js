import React  from 'react';
import './Home.css';
import { FaTools ,FaHeart } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Mode from './Components/Mode';


export default function Home(props)
{
  // var navigate = useNavigate();
  return(
    <>
    <heading >
      <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
    </heading>
    <Mode/>

      <card className="fcontainer">
      <NavLink className="Encode" to="/Encode"  > <h4 ><strong><b>Encode</b></strong></h4></NavLink>
      <NavLink className="Base64" to="/Base64EncodeDecode"  ><h4 ><strong><b> Base64 Encode-Decode</b></strong></h4></NavLink>
      <NavLink className="MD5Hash"to="/MD5HashGenerator"  ><h4 ><strong><b>MD5 Hash Generator</b></strong></h4> </NavLink>
      <NavLink className="SHA1" to="/SHA1HashGenerator"  > <h4 ><strong><b>SHA1 Hash Generator</b></strong></h4></NavLink>
      <NavLink className="SHA256" to="/SHA256HashGenerator"  ><h4 ><strong><b>SHA256 Hash Generator</b></strong></h4> </NavLink>
      <NavLink className="SHA512" to="/SHA512HashGenerator"  ><h4 ><strong><b>SHA512 Hash Generator</b></strong></h4> </NavLink>
      <NavLink className="IpAdress" to="/IpAdress"  ><h4 ><strong><b>My IP Address</b></strong></h4> </NavLink>
      <NavLink className="RGBHEX" to="/RGBandHEXConverter"  ><h4 ><strong><b>RGB to HEX | HEX to RGB</b></strong></h4> </NavLink>
      <NavLink className="EpochTime" to="/EpochTimeConverter"  ><h4 ><strong><b>Epoch Time Converter</b></strong></h4> </NavLink>
      <NavLink className="Numberbase" to="/NumberbaseConverter"  ><h4 ><strong><b>Number Base Converter</b></strong></h4> </NavLink>
      <NavLink className="UnitConverter" to="/UnitConverters"  ><h4 ><strong><b>Unit Converters</b></strong></h4> </NavLink>

      
      </card>
      <br></br>
      <footer className="footer">
         <p>Designed with  < FaHeart />  by Sudhir  </p>
      </footer>
    {/* <Card className="cardNames" name="Decode" 
     name1="Base64 Encode-Decode"
     name2="MD5 Hash Generator"
     name3="SHA1 Hash Generator"
     name4="SHA256 Hash Generator"
     name5="SHA512 Hash Generator"/> */}
    </>
  )
}
// function Card(props)
// {
//   var navigate = useNavigate();
//   return(
//     <>
//       <div className='fcontainer'>
//       <button className="fitem"  onClick={()=>navigate('Encode')} >{props.name}</button>
//       <button className="fitem"  onClick={()=>navigate('Base64EncodeDecode')}>{props.name1}</button>
//       <button className="fitem"  onClick={()=>navigate('Md5HashGenerator')}>{props.name2}</button>
//       <button className="fitem"  onClick={()=>navigate('SHA1HashGenerator')}>{props.name3}</button>
//       <button className="fitem"  onClick={()=>navigate('SHA256HashGenerator')}>{props.name4}</button>
//       <button className="fitem"  onClick={()=>navigate('SHA512HashGenerator')}>{props.name5}</button>
//       </div>
//       <br></br>
//       
//     </>
//   )
// }
