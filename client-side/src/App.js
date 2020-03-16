import React from "react";
import logo from "./logo.svg";
import "./App.css";
const style={
  width:70,
  height:70
}
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
        <button id="downloadData" style={style}></button>
      </header>
    </div>
  );
}
const downloadJSON = (content, fileName, contentType) => {
  const data = JSON.stringify(content.features);
  var a = document.createElement("a");
  var file = new Blob([data], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};
const downloadData = async () => {
  try {
    const response = await fetch("http://localhost:3000/download");
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse, "response from server");
      downloadJSON(jsonResponse, "json.txt", "text/plain");
      // return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("DOMContentLoaded", function(event) {
  document
    .querySelector("#downloadData")
    .addEventListener("click", downloadData);
  // console.log(data);
});
export default App;
