import React from "react";
import "./apresentation.css";
import golden from "../images/GoldenFilhote.png";
import Button from "./button";

export default (props) => {
  return (
    <div className="brand">
      <div className="apresentation">
        <div className="child-apresentation">
          <p className="s-48 mb-10">Oiii,</p>
          <p className="s-72 mb-10">
            Eu sou o <span className="bold">Tebe!</span>
          </p>
          <div className="light mb-10">
            <p>Quero muito ser seu novo melhor amigo! </p>
            <p>O que acha de me conhecer mais um pouquinho?</p>
          </div>
          <a href="#about">
            <Button label="Quero conhece-lo" className="border-25 button primary mb-10" />
          </a>
        </div>
      </div>

      <div className="box-golden">
        <img alt="dog" src={golden} className="golden" />
        <div className="shadow"></div>
      </div>
    </div>
  );
};
