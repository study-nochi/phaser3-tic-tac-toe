import { Scene } from "phaser";
import TicTacToe from "../TicTacToe";

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
    const ticTacToe = new TicTacToe();

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
    graphics.lineBetween(30, 402, 450, 402);

    this.#addGamePiece(0, 0);
    this.#addGamePiece(1, 0);
    this.#addGamePiece(2, 0);
    this.#addGamePiece(0, 1);
    this.#addGamePiece(0, 2);
    this.#addGamePiece(1, 1);
    this.#addGamePiece(1, 2);
    this.#addGamePiece(2, 1);
    this.#addGamePiece(2, 2);
  }

  #addGamePiece(x: number, y: number) {
    const pieceSize = 96;
    const xPosition = 50 + (pieceSize + pieceSize / 2) * x;
    const yPosition = 140 + (pieceSize + pieceSize / 2) * y;

    const gamePiece = this.add
      .image(xPosition, yPosition, SPRITE_ASSET_KEY, 2)
      .setScale(6)
      .setOrigin(0)
      .setInteractive();

    gamePiece.on(Phaser.Input.Events.POINTER_DOWN, () => {
      console.log(`Clicked on ${x}, ${y}`);
    });
  }
}
