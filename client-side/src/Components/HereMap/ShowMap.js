import React, { useEffect } from "react";

const ShowMap = () => {
  const mapRef = React.useRef(null);
  useEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    // Initialize the platform object:
    //declare H variable
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "PZ6cH-TXVo5jS9xcs8ehKjFBTtI1CgZeL5fzPHRgkcY"
    });

    // Obtain the default map types from the platform object
    const defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated
  return (
    <div
      ref={mapRef}
      style={{ height: "500px" }}
      id="mapContainer"
      className="container map"
    ></div>
  );
};

export default ShowMap;
