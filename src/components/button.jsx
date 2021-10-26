import React from "react";
import "./button.css";

export default (props) => {
  const Icon = props.icon;
  return (
    <button className={props.className}>
      {props.label}
      {Icon ? <Icon className="img" /> : ""}
    </button>
  );
};
