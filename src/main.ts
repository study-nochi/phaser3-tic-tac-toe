import { Game as MainGame } from "./scenes/Game";
import { AUTO, Game, Scale, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
  type: AUTO,
  pixelArt: true,
  backgroundColor: "#d3d3d3",
  scale: {
    width: 480,
    height: 640,
    parent: "game-container",
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [MainGame],
};

export default new Game(config);
