import React from "react";
import Skill from "./Skill";
export default function Skills(props) {
  return (
    <div>
      <h3>Skills</h3>

      <div className="skill-container">
        {props.skillData.map((node) => (
          <Skill abc={node} />
        ))}
      </div>
    </div>
  );
}
