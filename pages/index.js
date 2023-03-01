import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const index = () => {
    const [viewport, setViewport] = useState({
        latitude: 23.7640432,
        longitude: 90.4240439,
        width: "100%",
        height: "calc(100vh-64px)",
        zoom: 10,
    });

    return (
        <>
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            >
                markers here
            </ReactMapGl>
        </>
    );
};

export default index;
