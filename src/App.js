import React from "react";
import "./styles.css";
import Increment from "./incrementB";
export default function App() {
  return (
    <div className="App">
      <Increment style={{ position: "absolute", top: 50, left: 50 }} />
      <br />
      <Increment />
    </div>
  );
}
