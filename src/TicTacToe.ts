type Cell = "X" | "O" | "";
enum Player {
  X = "X",
  O = "O",
}
const DRAW = "DRAW" as const;

type GameWinner = Player | undefined | typeof DRAW;
type WinningCells = undefined | number[][];

export default class TicTacToe {
  #board: Cell[][] = [];
  #currentPlayerTurn: Player = Player.X;
  #gameWinner: GameWinner = undefined;
  #winningCells: WinningCells = undefined;
  #isGameOver = false;

  constructor() {
    this.#initializeBoard();
    console.log(this.#board);
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
    this.#winningCells = undefined;
  
  
  }
}
