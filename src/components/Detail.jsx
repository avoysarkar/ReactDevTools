import React from "react";

function Avatar(props) {
  return (
    <div>
      <p className="info">{props.tel}</p>
      <p className="info">{props.web}</p>
    </div>
  );
}

export default Avatar;
