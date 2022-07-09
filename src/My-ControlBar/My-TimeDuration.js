import videojs from "video.js";

var Component = videojs.getComponent("Component");

class MyTimeDuration extends Component {
  constructor(player, options) {
    super(player, options);

    console.log(player);
  }

  createEl() {
    let el = videojs.dom.createEl("div", {
      className: "vjs-Luan__time-duration",
    });

    // chèn icon Play/Pause:
    el.appendChild(
      videojs.dom.createEl("div", {
        className: "vjs-Luan__time-duration-display",
      })
    );

    // var durationTime = document.getElementsByClassName("vjs-Luan__time-duration-display");
    // console.log(durationTime);
    // durationTime.innerHTML = `4:30s`

    return el;
  }
}

videojs.registerComponent("MyTimeDuration", MyTimeDuration);

export default MyTimeDuration;
