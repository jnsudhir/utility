import React, { useState } from 'react';
import '../Home';
import { FaTools , FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Collapsible from "react-collapsible";
// import ReactDOM from 'react-dom';


export default function Base64EncodeDecode() {
  const handleEncoding =() =>
  {
    let encodingOutput = btoa(inputEncode);
    outputEncode(encodingOutput);
  }
  let clearEncoding =()=>
  {
    outputEncode('');
  }
  const handleDecoding = () =>
  {
    let decodingOutput = atob(inputDecode);
    outputDecode(decodingOutput);

  }
  const clearDecoding=()=>
  {
    outputDecode('');
  }
  let [inputEncode , outputEncode] = useState('');
  let [inputDecode , outputDecode] = useState('');
  
  return(
    <>
      <heading >
        <NavLink to="/" className="heading" ><h1> <FaTools/> Utility Apps</h1></NavLink>
      </heading>
      <div className="encode-decode">
        <encode >
          <textarea className="encodeDecode-textArea" type='text' value={inputEncode} onChange={(e) => outputEncode(e.target.value)} placeholder='Enter URL to Encode'></textarea>
          <br></br>
          <input className="encode-decodeBtn" type='button' onClick={handleEncoding} value='Encode'></input>
          <input className="encode-decodeBtn" type='button' onClick={clearEncoding} value='Clear'></input>
        </encode>
        <br></br>
        <decode >
          <textarea className="encodeDecode-textArea" type='text' value={inputDecode} onChange={(e) => outputDecode(e.target.value)} placeholder='Enter URL to Decode'></textarea>
          <br></br>
          <input className="encode-decodeBtn" type='button' onClick={handleDecoding} value='Decode'></input>
          <input className="encode-decodeBtn" type='button' onClick={clearDecoding} value='Clear'></input>
        </decode>
    </div>
    <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is Base64 encoding?", <FaAngleDown />]}
        >
          <p>
          The term Base 64 is generic, and there are many implementations. MIME, which stands for Multi-Purpose Internet Mail Extensions, is the most common that is seen today. It is used to transmit attachments via email over the Simple Mail Transfer Protocol (SMTP). Other examples of Base64 encoding are Radix-64 and YUI's Y64. Encoding data in Base64 results in it taking up roughly 33% more space than the original data.
          </p>
          <p>
          MIME Base64 encoding is the most common, and is based on the RFC 1420 specification. It also uses a = character at the end of a string to signify whether the last character is a single or double byte.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={[
            "When and why would you use Base64 encoding?",
            <FaAngleDown />,
          ]}
        >
          <p>
          You should use Base64 whenever you intend to transmit binary data in a textual format.
          </p>
        </Collapsible>
      </div>
    </>
  );
}


