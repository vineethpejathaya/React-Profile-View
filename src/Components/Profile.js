import React from "react";

export default function Profile(props) {
  return (
    <div className="img-container">
      <img src={props.source} alt="" />
      <h2>Vineeth P R</h2>
      <h2>Full Stack Web Developer</h2>
    </div>
  );
}
