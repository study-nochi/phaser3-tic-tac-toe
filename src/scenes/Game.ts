import { Scene } from "phaser";

const SPRITE_ASSET_KEY = "SPRITE_ASSET_KEY";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.spritesheet(SPRITE_ASSET_KEY, "assets/images/blocks.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    this.add.image(0, 0, SPRITE_ASSET_KEY, 2);
    this.add
      .text(240, 50, "Tic-Tac-Toe", {
        fontSize: "42px",
        fontFamily: "Verdana",
        color: "purple",
      })
      .setOrigin(0.5);

    this.add
      .text(240, 600, "X turn", {
        fontSize: "22px",
        fontFamily: "Verdana",
        color: "blue",
      })
      .setOrigin(0.5);

    const graphics = this.add.graphics();

    graphics.lineStyle(12, 0x3e3e3e);
    graphics.lineBetween(170, 120, 170, 540);
    graphics.lineBetween(314, 120, 314, 540);
    graphics.lineBetween(30, 258, 450, 258);
    graphics.lineBetween(30, 402, 450, 402 );
  }
}
