import videojs from "video.js";
import "./My-PlayToggle.js"

const Component = videojs.getComponent("Component");

class Luan_ControlBar extends Component {
  createEl() {
    return super.createEl("div", {
      className: "vjs-Luan__control-bar",
    });
  }
}

Luan_ControlBar.prototype.options_ = {
  children: [
    "MyPlayToggle"
  ],
};

Component.registerComponent("Luan_ControlBar", Luan_ControlBar);
export default Luan_ControlBar;
