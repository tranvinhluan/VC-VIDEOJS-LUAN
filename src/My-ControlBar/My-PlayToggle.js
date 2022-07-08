import videojs from "video.js";

var Button = videojs.getComponent("Button");

class MyPlayToggle extends Button {
  constructor(player, options) {
    super(player, options);
  }

  createEl() {
    let el = videojs.dom.createEl("button", {
      className: "vjs-Luan__play-control",
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

videojs.registerComponent("MyPlayToggle", MyPlayToggle);
export default MyPlayToggle;
