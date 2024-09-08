import { DRAW, Player } from "./constants/tic-tac-toe";

type Cell = "X" | "O" | "";
type GameWinner = undefined | "X" | "O" | typeof DRAW;

export default class TicTacToe {
  #board: Cell[][] = [];
  #currentPlayerTurn: Player = Player.X;
  #gameWinner: GameWinner = undefined;
  #isGameOver = false;

  constructor() {
    this.#initializeBoard();
    console.log(this.#board);
  }

  get currentPlayerTurn(): Player {
    return this.#currentPlayerTurn;
  }

  get isGameOver(): boolean {
    return this.#isGameOver;
  }

  get gameWinner(): GameWinner {
    return this.#gameWinner;
  }

  makeMove(x: number, y: number): void {
    if (this.#board[x][y] !== "") {
      return;
    }

    const isTurnByO = this.#currentPlayerTurn === Player.O;

    this.#board[x][y] = isTurnByO ? Player.O : Player.X;
    this.#currentPlayerTurn = isTurnByO ? Player.X : Player.O;
    this.#checkForGameEnd();
  }

  #initializeBoard() {
    for (let i = 0; i < 3; i++) {
      this.#board.push([]);
      for (let j = 0; j < 3; j++) {
        this.#board[i].push("");
      }
    }

    this.#currentPlayerTurn = Player.X;
    this.#gameWinner = undefined;
    this.#isGameOver = false;
  }

  #checkForGameEnd() {
    if (
      this.#board[0][0] !== "" &&
      this.#board[0][0] === this.#board[0][1] &&
      this.#board[0][0] === this.#board[0][2]
    ) {
      this.#gameWinner = this.#board[0][0];
    } else if (
      this.#board[1][0] !== "" &&
      this.#board[1][0] === this.#board[1][1] &&
      this.#board[1][0] === this.#board[1][2]
    ) {
      this.#gameWinner = this.#board[1][0];
    } else if (
      this.#board[2][0] !== "" &&
      this.#board[2][0] === this.#board[2][1] &&
      this.#board[2][0] === this.#board[2][2]
    ) {
      this.#gameWinner = this.#board[2][0];
    } else if (
      this.#board[0][0] !== "" &&
      this.#board[0][0] === this.#board[1][0] &&
      this.#board[0][0] === this.#board[2][0]
    ) {
      this.#gameWinner = this.#board[0][0];
    } else if (
      this.#board[0][1] !== "" &&
      this.#board[0][1] === this.#board[1][1] &&
      this.#board[0][1] === this.#board[2][1]
    ) {
      this.#gameWinner = this.#board[0][1];
    } else if (
      this.#board[0][2] !== "" &&
      this.#board[0][2] === this.#board[1][2] &&
      this.#board[0][2] === this.#board[2][2]
    ) {
      this.#gameWinner = this.#board[0][2];
    } else if (
      this.#board[0][0] !== "" &&
      this.#board[0][0] === this.#board[1][1] &&
      this.#board[0][0] === this.#board[2][2]
    ) {
      this.#gameWinner = this.#board[0][0];
    } else if (
      this.#board[0][2] !== "" &&
      this.#board[0][2] === this.#board[1][1] &&
      this.#board[0][2] === this.#board[2][0]
    ) {
      this.#gameWinner = this.#board[0][2];
    }

    if (this.#gameWinner !== undefined) {
      this.#isGameOver = true;
    }

    const isBoardFilled = this.#board.every((row) =>
      row.every((cell) => cell !== "")
    );

    if (isBoardFilled) {
      this.#gameWinner = DRAW;
      this.#isGameOver = true;
      return;
    }
  }
}
