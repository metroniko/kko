export default class Game {
  static points = {
    '1': 40,
    '2': 100,
    '3': 300,
    '4': 1200
  }
  score = 0;
  lines = 0;
  playField =  this.createPlayfield()
  activePiece = this.createPiece()
  nextPiece = this.createPiece();
  get level() {
    return Math.floor(this.lines * 0.1)
  }
  
  getState() {
    const { y: pieceY, x: pieceX, blocks } = this.activePiece; 
    const playField = this.createPlayfield();

    for (let y = 0; y < this.playField.length; y++) {

      playField[y] = []

      for (let x = 0; x < this.playField[y].length; x++) {
        playField[y][x] = this.playField[y][x];
      }
    }
    for (let y = 0; y < blocks.length; y++) {
    for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]) {
          playField[pieceY + y][pieceX + x] = blocks[y][x]
        }
      }
    }
    return {
      score: this.score,
      level: this.level,
      lines: this.lines,
      nextPiece: this.nextPiece,
      playField
    }
  }
  createPlayfield() {
    const temp = []

    for (let y = 0; y < 20; y++) {

      temp[y] = []

      for (let x = 0; x < 10; x++) {
        temp[y][x] = 0;
      }
    }    
    return temp
  }
  createPiece() {
    const index = Math.floor(Math.random() * 7)
    
    const type = 'IJLOSTZ'[index]
    const piece = {}
    switch(type) {
      case 'I' :
        piece.blocks = [
          [0,0,0,0],
          [1,1,1,1],
          [0,0,0,0],
          [0,0,0,0]
        ]
        break;
      case 'J' : 
        piece.blocks = [
          [0,0,0],
          [2,2,2],
          [0,0,2]
        ]
        break;
      case 'L' : 
        piece.blocks = [
          [0,0,0],
          [3,3,3],
          [3,0,0]
        ]
        break;
      case 'O' : 
      piece.blocks = [
        [0,0,0,0],
        [0,4,4,0],
        [0,4,4,0],
        [0,0,0,0]
      ]
        break;
      case 'S' : 
        piece.blocks = [
          [0,0,0],
          [5,5,5],
          [5,0,0]
        ]
        break;  
      case 'T' : 
        piece.blocks = [
          [0,0,0],
          [6,6,6],
          [0,6,0]
        ]
        break;
      case 'Z' : 
        piece.blocks = [
          [0,0,0],
          [7,7,7],
          [0,7,0]
        ]
        break;
      default:
        throw new Error("неизвестный тип фигуры")
    }
    piece.x = Math.floor((10 - piece.blocks[0].length)/2)
    piece.y = -1
    return piece
  }
  movePieceLeft() {
    this.activePiece.x -= 1;
    if(this.hasCollision()) {
      this.activePiece.x += 1;
    }
  }
  movePieceRight() {
    this.activePiece.x += 1;  
    if(this.hasCollision()) {
      this.activePiece.x -= 1;
    }
  }
  movePieceDown() {
    this.activePiece.y += 1;
    if(this.hasCollision()) {
      this.activePiece.y -= 1;
      this.lockPiece();
      const cleredLines = this.clearLines()
      this.updateScore(cleredLines)
      this.updatePieces()
    }
  }
  rotatePiece() {
    this.rotateBlocks()

    if (this.hasCollision()) {
      this.rotateBlocks(false)  
    }
  }
  rotateBlocks(clockwise = true) {
    const blocks = this.activePiece.blocks
    const length = blocks.length
    const x = Math.floor(length/2)
    const y = length - 1 

    for (let i = 0; i < x; i++) {
      for (let j = i; j <  y - i ; j++) {
        const temp = blocks[i][j]
        
        if (clockwise) {

          blocks[i][j] = blocks[y - j][i]
          blocks[y - j][i] = blocks[y - i][y - j]
          blocks[y - i][y - j] = blocks[j][y - i]
          blocks[j][y - i] = temp

        } else {

          blocks[i][j] = blocks[j][y - i]
          blocks[j][y - i] = blocks[y - i][y - j]
          blocks[y - i][y - j] = blocks[y - j][i]
          blocks[y - j][i] = temp;
        }

      }
    }
  }
  hasCollision() {// метод для проверки выхода фигуры за поле
    const { y: pieceY, x: pieceX, blocks } = this.activePiece; 

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if(blocks[y][x] &&
          ((this.playField[pieceY + y] === undefined || this.playField[pieceY + y][pieceX + x] === undefined) ||
          this.playField[pieceY + y][pieceX + x])) {
          return true
        }

      }
    }
    return false
  }

  lockPiece() {// считывание формы фигуры из activePiece в playField
    const { y: pieceY, x: pieceX, blocks } = this.activePiece; 

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]) {
          this.playField[pieceY + y][pieceX + x] = blocks[y][x];
        }
      }
    }
  }
  clearLines() {//удаление заполненнх линий 
    let lines = []
    const rows = 20
    const colums = 10
    for (let y = rows - 1; y >= 0; y--) {
      let numberOfBlocks = 0
      for (let x = 0; x < colums; x++) {
        if (this.playField[y][x]) {
          numberOfBlocks++
        }        
      }      
      if (numberOfBlocks == 0) {
        break
      } else if (numberOfBlocks < colums) {
        continue
      } else if (numberOfBlocks == colums) {
        lines.unshift(y)
      }
    }
    for (const index of lines) {
      this.playField.splice(index, 1)
      this.playField.unshift(new Array(colums).fill(0))
    }

    return lines.length
    
  }
  updateScore(clearedLines) {
    if (clearedLines > 0) {
      this.score += Game.points[clearedLines] * (this.level + 1);
      this.lines += clearedLines
    }
  }
  updatePieces() {
    this.activePiece = this.nextPiece
    this.nextPiece = this.createPiece()
  }

}