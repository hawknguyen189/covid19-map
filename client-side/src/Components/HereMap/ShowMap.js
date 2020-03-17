import React, { useEffect } from "react";

const ShowMap = () => {
  useEffect(() => {
    // Initialize the platform object:
    var platform = new H.service.Platform({
      apikey: "PZ6cH-TXVo5jS9xcs8ehKjFBTtI1CgZeL5fzPHRgkcY"
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById("mapContainer"),
      maptypes.vector.normal.map,
      {
        zoom: 10,
        center: { lng: 13.4, lat: 52.51 }
      }
    );
  });
  return (
    <div
      style="width: 640px; height: 480px"
      id="mapContainer"
      class="container"
    ></div>
  );
};

export default ShowMap;
