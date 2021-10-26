import React from "react";
import "./description.css";

export default (props) => {
  const img = props.img;
  return (
    <div className="box-description">
      <div className="img-description mb-10">{props.children}</div>
      <p className="theme mb-10">{props.theme}</p>
      <p className="text">{props.text}</p>
    </div>
  );
};
