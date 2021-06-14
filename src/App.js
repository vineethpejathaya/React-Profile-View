import React from "react";
import "./styles.css";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import source from "./Images/Profile.jpeg";
let skillData = [
  ["HTML", 8],
  ["CSS", 8],
  ["JavaScript", 8],
  ["React", 8],
  ["Python", 8],
  ["MYSQL", 8],
  ["Angular", 8],
  ["Bootstrap", 8]
];
export default function App() {
  return (
    <div className="App">
      <Profile source={source} />
      <Skills skillData={skillData} />
    </div>
  );
}
