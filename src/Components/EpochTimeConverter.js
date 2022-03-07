import React, { useState } from "react";
import "../Home";
import { FaTools, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

export default function EpochTimeConverter() {
  function epochTime() {
    document.querySelector(".eTime").value = Math.floor(
      new Date().getTime() / 1000.0
    );
    document.querySelector(".cTime").innerHTML = new Date();
  }
  setInterval(epochTime, 1000);
  function epochToHuman() {
    let q = document.querySelector(".epTime").value * 1000;
    let w = (document.querySelector(".op").value = new Date(q));
    w.toGMTString();
    w.toLocaleString();
  }
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
        <label className="epochLabel">
          Current Epoch time is :
          <input type="text" className="eTime" />
        </label>
        <br></br>
        <label className="epochLabel">
          Current time is:
          <span className="cTime"></span>
        </label>
        <br></br>
        <h4>Epoch Time to Human readable time</h4>
        <label className="epochLabel">
          Epoch time :
          <input type="text" className="epTime" placeholder="1645971316" />
        </label>
        <br></br>
        <input
          type="button"
          className="convertBtn"
          onClick={epochToHuman}
          value="Convert"
        />
        <br></br>
        <label className="epochLabel">
          Human Date:
          <input type="text" className="op" />
        </label>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is Epoch Time?", <FaAngleDown />]}
        >
          <p>
            The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the
            number of seconds that have elapsed since January 1, 1970 (midnight
            UTC/GMT), not counting leap seconds (in ISO 8601:
            1970-01-01T00:00:00Z). Literally speaking the epoch is Unix time 0
            (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix
            time. Some systems store epoch dates as a signed 32-bit integer,
            which might cause problems on January 19, 2038 (known as the Year
            2038 problem or Y2038). The converter on this page converts
            timestamps in seconds (10-digit), milliseconds (13-digit) and
            microseconds (16-digit) to readable dates.
          </p>
        </Collapsible>
      </div>
    </>
  );
}
