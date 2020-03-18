import React from "react";
import ShowMap from "./ShowMap"

const HereMap = () => {
  return (
    <div>
      <button id="downloadData" className="btn btn-primary">Update Map</button>
      <ShowMap></ShowMap>
    </div>
  );
};

export default HereMap;
