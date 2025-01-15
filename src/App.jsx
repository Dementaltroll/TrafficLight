import { useState } from 'react'
import ReactDOM from "react-dom/client";
import './App.css'

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div id="trafficTop">
      <div id="container">
        <div
          className={`light red ${color === "red" ? "selected" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "selected" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "selected" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);


export default TrafficLight
