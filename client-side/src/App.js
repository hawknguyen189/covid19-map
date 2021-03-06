import React from "react";
import logo from "./logo.svg";
// import HereMap from "./Components/HereMap/HereMap";
import LeafletMap from "./Components/LeafletMap/LeafletMap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LeafletMap></LeafletMap>
      {/* <HereMap></HereMap> */}
    </div>
  );
}
export default App;
