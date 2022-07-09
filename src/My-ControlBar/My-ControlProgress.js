import videojs from "video.js";

var Component = videojs.getComponent("Component");

class MyControlProgress extends Component {
  constructor(player, options) {
    super(player, options);
  }

  createEl() {
    let el = videojs.dom.createEl("div", {
      className: "vjs-Luan__progress-control",
    });

     // chèn icon Play/Pause:
     el.appendChild(
        videojs.dom.createEl(
          "div",
          {
            className: "vjs-Luan__progress-holder",
          },
        )
      );

    return el;
  }
}

videojs.registerComponent("MyControlProgress", MyControlProgress);
export default MyControlProgress;
