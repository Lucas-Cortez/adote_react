import React from "react";
import "./header.css";
import Button from "./button";
import { FiUserPlus, FiPhoneCall } from "react-icons/fi";

export default (props) => {
  return (
    <header className="header">
      <h1>ADOTE</h1>
      <div className="buttons">
        <Button
          label="Contate-nos"
          className="secondary button border-10"
          icon={FiPhoneCall}
        />
        <Button
          label="Tornar-se Membro"
          className="primary button border-10"
          icon={FiUserPlus}
        />
      </div>
    </header>
  );
};
