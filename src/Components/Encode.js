import React, { useState } from "react";
import "../Home";
import { NavLink } from "react-router-dom";
import { FaTools, FaAngleDown } from "react-icons/fa";
import Collapsible from "react-collapsible";
// import ReactDOM from 'react-dom';
export default function Encode() {
  let onchange = () => {
    let q = encodeURIComponent(inputText);
    outputText(q);
  };
  let onchange2 = () => {
    let w = decodeURIComponent(inputText1);
    outputText1(w);
  };
  let clearDecode = () => {
    outputText1("");
  };
  let clearEncode = () => {
    outputText("");
  };
  let [inputText, outputText] = useState("");
  let [inputText1, outputText1] = useState("");
  return (
    <>
      <heading>
        <NavLink to="/" className="heading">
          <h1>
            {" "}
            <FaTools /> Utility Apps
          </h1>
        </NavLink>
      </heading>
      <div className="encode-decode">
        <encode>
          <textarea
            className="encodeDecode-textArea"
            type="text"
            value={inputText}
            placeholder=" Enter URL to Encode. 
      Example: https://www.google.com"
            onChange={(e) => outputText(e.target.value)}
          ></textarea>
          <br></br>
          <input
            className="encode-decodeBtn"
            type="button"
            onClick={onchange}
            value="Encode"
          />
          <input
            className="encode-decodeBtn"
            type="button"
            onClick={clearEncode}
            value="clear"
          />
        </encode>
        <br></br>
        <decode>
          <textarea
            className="encodeDecode-textArea"
            type="text"
            value={inputText1}
            placeholder="Enter URL to Decode"
            onChange={(e) => outputText1(e.target.value)}
          ></textarea>
          <br></br>
          <input
            className="encode-decodeBtn"
            type="button"
            onClick={onchange2}
            value="Decode"
          />
          <input
            className="encode-decodeBtn"
            type="button"
            onClick={clearDecode}
            value="clear"
          />
        </decode>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is URL Encoding?", <FaAngleDown />]}
        >
          <p>
            URL encoding stands for encoding certain characters in a URL by
            replacing them with one or more character triplets that consist of
            the percent character "%" followed by two hexadecimal digits. The
            two hexadecimal digits of the triplet(s) represent the numeric value
            of the replaced character.
          </p>
          <p>
            The term URL encoding is a bit inexact because the encoding
            procedure is not limited to URLs (Uniform Resource Locators), but
            can also be applied to any other URIs (Uniform Resource Identifiers)
            such as URNs (Uniform Resource Names). Therefore, the term
            percent-encoding should be preferred.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={[
            "When and why would you use URL Encoding/Decode?",
            <FaAngleDown />,
          ]}
        >
          <p>
            When data that has been entered into HTML forms is submitted, the
            form field names and values are encoded and sent to the server in an
            HTTP request message using method GET or POST, or, historically, via
            email. The encoding used by default is based on a very early version
            of the general URI percent-encoding rules, with a number of
            modifications such as newline normalization and replacing spaces
            with "+" instead of "%20". The MIME type of data encoded this way is
            application/x-www-form-urlencoded, and it is currently defined
            (still in a very outdated manner) in the HTML and XForms
            specifications. In addition, the CGI specification contains rules
            for how web servers decode data of this type and make it available
            to applications.
          </p>
          <p>
            When sent in an HTTP GET request, application/x-www-form-urlencoded
            data is included in the query component of the request URI. When
            sent in an HTTP POST request or via email, the data is placed in the
            body of the message, and the name of the media type is included in
            the message's Content-Type header.
          </p>
        </Collapsible>
      </div>
    </>
  );
}
// ReactDOM.render(<Encode/> , document.getElementById('root'));
