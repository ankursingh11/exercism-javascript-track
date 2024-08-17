// https://exercism.org/tracks/javascript/exercises/queen-attack/edit

//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOARD_SIZE = 8;

export class QueenAttack {
  black = [0, 3];
  white = [BOARD_SIZE - 1, 3];
  constructor(queensPosition) {
    if (queensPosition) {
      const { white, black } = queensPosition;
      if (white) {
        this.white = white;
        this.isValidPoints(this.white[0], this.white[1]);
      }
      if (black) {
        this.black = black;
        this.isValidPoints(this.black[0], this.black[1]);
      }
      if (white && black) {
        this.isSamePosition();
      }
    }

    this.board = Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => "_")
    );
    this.board[this.white[0]][this.white[1]] = "W";
    this.board[this.black[0]][this.black[1]] = "B";
  }

  isValidPoints(x, y) {
    if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) {
      throw new Error("Queen must be placed on the board");
    }
  }

  isSamePosition() {
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error("Queens cannot share the same space");
    }
  }

  toString() {
    return this.board.map((ele) => ele.join(" ")).join("\n");
  }

  checkInRow() {
    let row = this.white[0];
    let col = this.white[1];
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (this.board[row][j] === "B") return true;
    }
    return false;
  }

  checkInCol() {
    let row = this.white[0];
    let col = this.white[1];
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (this.board[i][col] === "B") return true;
    }
    return false;
  }

  checkInDiagonal() {
    let row = this.white[0];
    let col = this.white[1];

    // check in upper left diagonal
    let i = row - 1,
      j = col - 1;
    while (i >= 0 && j >= 0) {
      if (this.board[i][j] === "B") return true;
      i--;
      j--;
    }

    // check in upper right diagonal
    (i = row - 1), (j = col + 1);
    while (i >= 0 && j < BOARD_SIZE) {
      if (this.board[i][j] === "B") return true;
      i--;
      j++;
    }

    // check in lower left Diagonal
    (i = row + 1), (j = col - 1);
    while (i < BOARD_SIZE && j >= 0) {
      if (this.board[i][j] === "B") return true;
      i++;
      j--;
    }

    // check in lower right Diagonal
    (i = row + 1), (j = col + 1);
    while (i < 8 && j < BOARD_SIZE) {
      if (this.board[i][j] === "B") return true;
      i++;
      j++;
    }

    return false;
  }

  get canAttack() {
    if (this.checkInRow() || this.checkInCol() || this.checkInDiagonal())
      return true;
    return false;
  }
}
