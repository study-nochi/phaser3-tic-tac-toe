import { Scene } from "phaser";
import TicTacToe from "../TicTacToe";
import { DRAW, Player } from "../constants/tic-tac-toe";

const SPRITE_ASSET_KEY = "SPRITE_ASSET_KEY";

export class Game extends Scene {
  #ticTacToe: TicTacToe;
  #playerTurnTextGameObject: Phaser.GameObjects.Text;

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
    this.#ticTacToe = new TicTacToe();

    this.add
      .text(240, 50, "Tic-Tac-Toe", {
        fontSize: "42px",
        fontFamily: "Verdana",
        color: "purple",
      })
      .setOrigin(0.5);

    this.#playerTurnTextGameObject = this.add
      .text(240, 600, "X turn", {
        fontSize: "22px",
        fontFamily: "Verdana",
        color: "red",
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
      console.log("isGameOver", this.#ticTacToe.isGameOver);
      console.log("gameWinner", this.#ticTacToe.gameWinner);

      if (this.#ticTacToe.isGameOver) {
        return;
      }

      const currentPlayer = this.#ticTacToe.currentPlayerTurn;
      this.#ticTacToe.makeMove(x, y);

      const isNextTurnByO = currentPlayer === Player.X;

      if (currentPlayer === Player.X) {
        gamePiece.setFrame(0);
      } else {
        gamePiece.setFrame(1);
      }

      if (this.#ticTacToe.isGameOver && this.#ticTacToe.gameWinner !== DRAW) {
        this.#playerTurnTextGameObject.setText(`${currentPlayer} wins!`);
        return;
      }

      if (this.#ticTacToe.isGameOver) {
        this.#playerTurnTextGameObject.setText(
          this.#ticTacToe.gameWinner as string
        );
        return;
      }

      this.#playerTurnTextGameObject
        .setText(`${this.#ticTacToe.currentPlayerTurn} turn`)
        .setColor(isNextTurnByO ? "green" : "red");
    });
  }
}
