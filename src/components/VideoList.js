import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect: popeye }) => {
  //props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.snippet.description}
        popeye={popeye}
        movingPictures={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
