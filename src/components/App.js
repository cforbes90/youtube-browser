import React from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

//restricted to LocalHost
const KEY = "AIzaSyC_4UOMjwyN-qvnq6wqioa9EhqRjL1I9rs";

class App extends React.Component {
  //make empty arrays as your default configuration
  state = { videos: [] };
  onSecondToFinalMoveSubmit = async (term) => {
    console.log("this is the parent app talking now!");
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    console.log(response.data.items);
    const videos = response.data.items;
    this.setState({ videos });
    // console.log(`this is videos destructured`);
    console.log(this.state.videos);
  };
  render() {
    return (
      <div className="ui container">
        {/* //This prop could have been called anything */}
        <SearchBar onTURKEYSubmit={this.onSecondToFinalMoveSubmit} />
        <VideoList videos={this.state.videos} />I have:{" "}
        {this.state.videos.length}
      </div>
    );
  }
}

export default App;
