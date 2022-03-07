import React, { useState } from "react";
import "../Home";
import { FaTools, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";
// import ReactDOM from 'react-dom';
import MD5 from "crypto-js/md5";
// import ScriptTag from 'react-script-tag';
// export function AddLibrary(urlOfTheLibrary) {
//     const script = document.createElement('script');
//     script.src = urlOfTheLibrary;
//     script.async = true;
//     document.body.appendChild(script);

export default function Md5HashGenerator() {
  const md5HashConvert = () => {
    let hash = MD5(md5HashInput);
    let op = hash.toString();
    md5HashOutput(op);
  };
  const clearMD5Hash = () => {
    md5HashOutput("");
  };
  let [md5HashInput, md5HashOutput] = useState("");
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
        <textarea
          className="encodeDecode-textArea"
          value={md5HashInput}
          onChange={(e) => md5HashOutput(e.target.value)}
          placeholder="Enter String to convert"
        ></textarea>
        <input
          className="md5Btn"
          type="button"
          value="Convert"
          onClick={md5HashConvert}
        />
        <input
          className="md5Btn"
          type="button"
          onClick={clearMD5Hash}
          value="Clear"
        ></input>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is MD5 Hash?", <FaAngleDown />]}
        >
          <p>
            An MD5 hash is created by taking a string of an any length and
            encoding it into a 128-bit fingerprint. Encoding the same string
            using the MD5 algorithm will always result in the same 128-bit hash
            output. MD5 hashes are commonly used with smaller strings when
            storing passwords, credit card numbers or other sensitive data in
            databases such as the popular MySQL. This tool provides a quick and
            easy way to encode an MD5 hash from a simple string of up to 256
            characters in length.
          </p>
          <p>
            MD5 hashes are also used to ensure the data integrity of files.
            Because the MD5 hash algorithm always produces the same output for
            the same given input, users can compare a hash of the source file
            with a newly created hash of the destination file to check that it
            is intact and unmodified.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={["Uses MD5 Hash?", <FaAngleDown />]}
        >
          <p>
            This MD5 hash generator is useful for encoding passwords, credit
            cards numbers and other sensitive date into MySQL, Postgress or
            other databases. PHP programmers, ASP programmers and anyone
            developing on MySQL, SQL, Postgress or similar should find this
            online tool an especially handy resource.
          </p>
        </Collapsible>
      </div>
    </>
  );
}
// ReactDOM.render(<Md5HashGenerator/> , document.getElementById('root'));
