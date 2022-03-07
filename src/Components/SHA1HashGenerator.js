import React, { useState } from "react";
import sha1 from "crypto-js/sha1";
import "../Home";
import { FaTools, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

export default function SHA1HashGenerator() {
  const sha1HashConvert = () => {
    let sha1Input = sha1(sha1HashInput);
    let op1 = sha1Input.toString();
    sha1HashOutput(op1);
  };
  const clearSHA1Hash = () => {
    sha1HashOutput("");
  };
  let [sha1HashInput, sha1HashOutput] = useState("");
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
          value={sha1HashInput}
          onChange={(e) => sha1HashOutput(e.target.value)}
          placeholder="Enter String to convert"
        ></textarea>
        <input
          className="md5Btn"
          type="button"
          value="Convert"
          onClick={sha1HashConvert}
        />
        <input
          className="md5Btn"
          type="button"
          onClick={clearSHA1Hash}
          value="Clear"
        ></input>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is SHA-1 Hashing?", <FaAngleDown />]}
        >
          <p>
            SHA-1 (Secure Hash Algorithm) is a 160 bit cryptographic hash
            function created by the NSA in 1995. It creates a 40 byte hash value
            for the input of the algorithm. SHA-1 is one-way, meaning that the
            original input cannot be be determined simply by knowing the hash
            value. SHA-1 was designed to be collision resistant, meaning that
            two inputs could not have the same hash value.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={[
            "When and why would you use SHA-1 Hashing?",
            <FaAngleDown />,
          ]}
        >
          <p>
            In 2005, SHA-1 was found to no longer be secure enough for ongoing
            use in high security environments. It was widely used for signing of
            SSL certificates, but is being phased out and will no longer be
            supported by many browsers by 2017.
          </p>
          <p>
            SHA-1 is often used as a checksum algorithm. Text or files are fed
            into the MD5 algorithm and the resulting hash would change if the
            file had been changed. This is done to detect malicious tampering,
            or file corruption.
          </p>
          <p>
            SHA-1 has also historically been used as a password hashing
            algorithm. Password hashing algorithms allow a password to be
            stored, in a website's database for instance, without having to
            store the actual password. This makes it more difficult to steal
            passwords, and if the hash is taken, the user's password is not
            necessarily compromised. When using a hashing algorithm for
            passwords it is wise to use "salt". With SHA-1, salt is added by
            concatinating a string unrelated to the password to the user
            supplied password string.
          </p>
        </Collapsible>
      </div>
    </>
  );
}
