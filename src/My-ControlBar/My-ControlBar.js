import videojs from "video.js";
import "./My-PlayToggle.js";
import "./My-ControlPanel.js";
import "./My-ControlProgress.js";
import "./My-TimeDuration.js";


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
    "MyPlayToggle",
    "MyControlPanel",
    "MyControlProgress",
    "MyTimeDuration",
  ],
};

Component.registerComponent("Luan_ControlBar", Luan_ControlBar);
export default Luan_ControlBar;
