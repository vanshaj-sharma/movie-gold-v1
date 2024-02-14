import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./Trailer.css";

import React from "react";

const Trailer = () => {
  let params = useParams();
  const key = params.ytTrailerId;
  return (
    <div className="react-player-contianer">
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={true}
          url={`hhtpls://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
