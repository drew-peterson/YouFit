import React from "react";
// import YouTube from "react-native-youtube"
import { WebView, Text, View } from "react-native";

export default () => {
  const url =
    "https://www.youtube.com/embed/esQi683XR44?rel=0&autoplay=0&showinfo=0&controls=0";
  // const url =
  //   "https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0";
  return (
    // <YouTube
    //   videoId="KVZ-P-ZI6W4" // The YouTube video ID
    //   play={true} // control playback of video with true/false
    //   fullscreen={true} // control whether the video should play in fullscreen or inline
    //   loop={true} // control whether the video should loop when ended
    //   onReady={e => this.setState({ isReady: true })}
    //   onChangeState={e => this.setState({ status: e.state })}
    //   onChangeQuality={e => this.setState({ quality: e.quality })}
    //   onError={e => this.setState({ error: e.error })}
    //   style={{ alignSelf: "stretch", height: 300 }}
    // />

    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{
        uri: url
      }}
    />
  );
};
