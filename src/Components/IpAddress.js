import React from "react";
import "../Home";
import { FaTools, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

export default function IpAddress() {
  fetch("https://api.ipify.org/?format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => (document.querySelector("#qw").value = data.ip));
  return (
    <>
      <div>
        <NavLink to="/" className="heading">
          <h1>
            {" "}
            <FaTools /> Utility Apps
          </h1>
        </NavLink>
      </div>
      <div className="text-container">
        <input id="qw" type="text"></input>
      </div>
      <div className="expandable-container">
        <Collapsible
          className="expandable-item"
          trigger={["What is IP Address?", <FaAngleDown />]}
        >
          <p>
            IP (Internet Protocol) addresses are used to identify hardware
            devices on a network. The addresses allow these devices to connect
            to one another and transfer data on a local network or over the
            internet.
          </p>
          <p>
            Each address is a string of numbers separated by periods. There are
            four numbers in total and each number can range between 0 and 255.
            An example of an IP address would be: 506.457.14.512
          </p>
          <p>
            We need billions of IP addresses to identify every computer, router
            and website on the internet. One day we’ll run out of unique
            addresses and a new IPv6 protocol has been designed to meet this
            need.
          </p>
        </Collapsible>
        <hr></hr>
        <Collapsible
          className="expandable-item"
          trigger={[" Types of IP Address?", <FaAngleDown />]}
        >
          <ol>
            <li>Public Internet protocol Address</li>
            <li>Private Internet protocol Address</li>
            <li>Static Internet protocol Address</li>
            <li>Dynamic Internet protocol Address</li>
          </ol>
        </Collapsible>
      </div>
    </>
  );
}
