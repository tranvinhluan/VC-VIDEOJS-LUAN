import videojs from "video.js";

var Button = videojs.getComponent("Button");

class MyControlPanel extends Button {
  constructor(player, options) {
    super(player, options);
  }

  createEl() {
    let el = videojs.dom.createEl("button", {
      className: "vjs-Luan__panel-control",
    });

     // chèn icon Play/Pause:
     el.appendChild(
        videojs.dom.createEl(
          "div",
          {
            className: "vjs-Luan__icon-placeholder",
          },
        )
      );

    return el;
  }
}

videojs.registerComponent("MyControlPanel", MyControlPanel);
export default MyControlPanel;
