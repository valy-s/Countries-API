import React from "react";
import { Link } from "react-router-dom";

function Btn(props) {
  return (
    <button className="btn">
      <Link to={`${props.link}`}>
        <span>{props.text}</span>
      </Link>
    </button>
  );
}

export default Btn;
