import React, { useState } from "react";
import sha512 from "crypto-js/sha512";
import "../Home";
import { FaTools, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

export default function SHA512HashGenerator() {
  const sha512HashConvert = () => {
    let sha512input = sha512(sha512HashInput);
    let op3 = sha512input.toString();
    sha512HashOutput(op3);
  };
  const clearSHA512Hash = () => {
    sha512HashOutput("");
  };

  let [sha512HashInput, sha512HashOutput] = useState("");

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
          value={sha512HashInput}
          onChange={(e) => sha512HashOutput(e.target.value)}
          placeholder="Enter String to convert"
        ></textarea>
        <input
          className="md5Btn"
          type="button"
          value="Convert"
          onClick={sha512HashConvert}
        />
        <input
          className="md5Btn"
          type="button"
          onClick={clearSHA512Hash}
          value="Clear"
        ></input>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is SHA-512 Hashing?", <FaAngleDown />]}
        >
          <p>
            SHA-512, or Secure Hash Algorithm 512, is a hashing algorithm used
            to convert text of any length into a fixed-size string. Each output
            produces a SHA-512 length of 512 bits (64 bytes).
          </p>
          <p>
            This algorithm is commonly used for email addresses hashing,
            password hashing, and digital record verification. SHA-512 is also
            used in blockchain technology, with the most notable example being
            the BitShares network.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={[" Uses SHA-512 Hashing?", <FaAngleDown />]}
        >
          <ol>
            <li>Email Address Hashing</li>
            <li>Password Hashing</li>
            <li>Digital record verification</li>
            <li>Integrity Checks</li>
          </ol>
        </Collapsible>
      </div>
    </>
  );
}
