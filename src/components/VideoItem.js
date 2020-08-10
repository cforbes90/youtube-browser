import "./VideoItem.css";
import React from "react";
import { List, Image } from "semantic-ui-react";

const VideoItem = ({ video }) => {
  console.log("below is props.video");

  return (
    <div className=" video-item item">
      <Image
        ui
        image
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />
      <List.Content>
        <List.Header>{video.snippet.title} </List.Header>
      </List.Content>
    </div>
  );
};

export default VideoItem;
