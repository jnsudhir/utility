import React, { useState } from "react";
import sha256 from "crypto-js/sha256";
import "../Home";
import { FaTools, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

function SHA256HashGenerator() {
  const sha256HashConvert = () => {
    let sha256input = sha256(sha256HashInput);
    let op2 = sha256input.toString();
    sha256HashOutput(op2);
  };
  let clearSHA256Hash = () => {
    sha256HashOutput("");
  };
  let [sha256HashInput, sha256HashOutput] = useState("");
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
          value={sha256HashInput}
          onChange={(e) => sha256HashOutput(e.target.value)}
          placeholder="Enter String to convert"
        ></textarea>
        <input
          className="md5Btn"
          type="button"
          value="Convert"
          onClick={sha256HashConvert}
        />
        <input
          className="md5Btn"
          type="button"
          onClick={clearSHA256Hash}
          value="Clear"
        ></input>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is SHA-256 Hashing?", <FaAngleDown />]}
        >
          <p>
            SHA 256 is a part of the SHA 2 family of algorithms, where SHA
            stands for Secure Hash Algorithm. Published in 2001, it was a joint
            effort between the NSA and NIST to introduce a successor to the SHA
            1 family, which was slowly losing strength against brute force
            attacks.
          </p>
          <p>
            The significance of the 256 in the name stands for the final hash
            digest value, i.e. irrespective of the size of plaintext/cleartext,
            the hash value will always be 256 bits.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={[" Uses SHA-256 Hashing?", <FaAngleDown />]}
        >
          <ol>
            <li>Digital Signature Verification</li>
            <li>Password Hashing</li>
            <li>SSL Handshake</li>
            <li>Integrity Checks</li>
          </ol>
        </Collapsible>
      </div>
    </>
  );
}
export default SHA256HashGenerator;
