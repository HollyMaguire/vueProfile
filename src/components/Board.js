export default class Board {
  constructor() {
    this.box = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

  gameOver() {
    return this.getPossibleMoves().length === 0 || this.winning('x') || this.winning('o');
  }

  clone() {
    let clone = new Board();

    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        clone.box[i][j] = this.box[i][j];
      }
    }

    return clone;
  }

  getPossibleMoves() {
    let moves = [];
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        if (this.box[i][j] === '') {
          moves.push({x: i, y: j});
        }
      }
    }
    return moves;
  }

  doMove(x, y, player) {
    if (this.box[x][y] !== '') {
      return false;
    }

    this.box[x][y] = player;
    return true;
  }

  getScore() {
    let score = 0;
    if (this.winning('x')) {
      score -= 100;
    }
    if (this.winning('o')) {
      score += 100;
    }
    return score;
  }

  winning(player) {
    
    for (let i=0; i<3; i++) {
      if (this.box[0][i] === player && this.box[1][i] === player && this.box[2][i] === player) {
        return true;
      }
    }

    
    for (let i=0; i<3; i++) {
      if (this.box[i][0] === player && this.box[i][1] === player && this.box[i][2] === player) {
        return true;
      }
    }

   
    if (this.box[0][0] === player && this.box[1][1] === player && this.box[2][2] === player) {
      return true;
    }
    if (this.box[2][0] === player && this.box[1][1] === player && this.box[0][2] === player) {
      return true;
    }

    return false;
  }

  toString() {
    let str = "";
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        str += this.box[j][i];
      }
      str += "\n"
    }
    return str;
  }
}