import React, { useRef, useEffect } from "react";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom, id } = props;

  useEffect(() => {
    const maps = new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM(),
        }),
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.eventLongitude, center.eventLatitude]),
        zoom: zoom,
      }),
    });

    const layer = new window.ol.layer.Vector({
      source: new window.ol.source.Vector({
        features: [
          new window.ol.Feature({
            geometry: new window.ol.geom.Point(
              window.ol.proj.fromLonLat([center.eventLongitude, center.eventLatitude])
            ),
          }),
        ],
      }),
      style: new window.ol.style.Style({
        image: new window.ol.style.Icon({
          anchor: [0.5, 1],
          crossOrigin: "anonymous",
          src: "https://cdn.iconscout.com/icon/free/png-256/free-location-4083026-3377334.png",
          scale: 0.2
        }),
      }),
    });
    maps.addLayer(layer);
  }, [center, zoom, id]);

  return (
    <div
      ref={mapRef}
      style={{ width: "350px", height: "200px" }}
      id={id}
    ></div>
  );
};

export default Map;
