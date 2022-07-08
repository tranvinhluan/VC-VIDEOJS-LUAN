import "./style/index.css";
import "./style/video-js.css";

import videojs from "video.js";
import "./My-ControlBar/My-ControlBar.js";

var player = videojs(
  "my-player",
  {
    controls: true,
    autoplay: false,
    preload: "auto",
    loop: true,
    playbackRates: [0.5, 1, 1.5, 2],
    poster:
      "https://media.vov.vn/uploaded/rftwybrxfmly8uzveukg/2019_06_05/1_copy_ufut.jpg",
    sources: [
      {
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
    children: [
      "posterImage",
      "mediaLoader",
      "bigPlayButton",
      "ControlBar",
      "Luan_ControlBar",
    ],
  },
  function () {
    player.addClass("vjs-LUAN")
  }
);
