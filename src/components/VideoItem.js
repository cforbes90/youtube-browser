import "./VideoItem.css";
import React from "react";
import { List, Image } from "semantic-ui-react";

const VideoItem = ({ movingPictures, popeye: oliveOil }) => {
  console.log("below is props.video");

  return (
    //We are making sure we are destructuring the onVideoSelect by keeping the same name through everything. Also, we are for sure passing in the video into this function by organizing it like this!
    <div onClick={() => oliveOil(movingPictures)} className=" video-item item">
      <Image
        ui
        image
        alt={movingPictures.snippet.title}
        src={movingPictures.snippet.thumbnails.high.url}
      />
      <List.Content>
        <List.Header>{movingPictures.snippet.title} </List.Header>
      </List.Content>
    </div>
  );
};

export default VideoItem;
