export default class View {


  static colors = {
    '1': 'cyan',
    '2': 'blue',
    '3': 'orange',
    '4': 'yellow',
    '5': 'green',
    '6': 'purple',
    '7': 'red'
  }
  constructor(element, width, height, rows, colums) {
    this.element = element
    this.width = width
    this.height = height

    this.canvas = document.createElement('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.context = this.canvas.getContext('2d')// задаётся контекст
    this.playFieldBorderWidth = 4
    this.playFieldX = this.playFieldBorderWidth
    this.playFieldY = this.playFieldBorderWidth
    this.playFieldWidth = this.width * 2 / 3
    this.playFieldHeight = this.height
    this.playFieldInnerWidth = this.playFieldWidth - this.playFieldBorderWidth * 2
    this.playFieldInnerHeight = this.playFieldHeight - this.playFieldBorderWidth * 2



    this.blockWidth = this.playFieldInnerWidth / colums
    this.blockHeight = this.playFieldInnerHeight / rows

    this.panelX =this.playFieldWidth + 10
    this.panelY = 0
    this.panelWidth = this.width / 3
    this.panelHeight = this.height

    this.element.appendChild(this.canvas)
    

  }

  renderMainScreen(state) {// метод рисует игровое поле
    this.clearScreen()
    this.renderPlayField(state)
    this.renderPanel(state)
  }

  renderPlayField({ playField }) {
    for (let y = 0; y < playField.length; y++) {
      const line = playField[y];
      for (let x = 0; x < line.length; x++) {
        const block = line[x];
        if (block) {
          this.renderBlock(
            this.playFieldX + (x * this.blockHeight),
            this.playFieldY + (y * this.blockWidth),
            this.blockHeight,
            this.blockWidth,
            View.colors[block]
          )
        }
      }
    }
    this.context.strokeStyle = 'white'
    this.context.lineWidth = this.playFieldBorderWidth
    this.context.strokeRect(0 , 0, this.playFieldWidth, this.playFieldHeight)
  }
  renderStartScreen() {
    this.context.fillStyle = 'white'
    this.context.font = '18px "Press Start 2P"'
    this.context.textAlign = 'center'
    this.context.textBaseline = 'middle'
    this.context.fillText(' Press Enter to start', this.width/2, this.height/ 2 )
  }
  renderPauseScreen() {
    this.context.fillStyle = 'rgba(0,0,0,0.75)'
    this.context.fillRect(0, 0, this.width, this.height)
    this.context.fillStyle = 'white'
    this.context.font = '18px "Press Start 2P"'
    this.context.textAlign = 'center'
    this.context.textBaseline = 'middle'
    this.context.fillText(' Press Enter to resume', this.width/2, this.height/ 2 )

  }
  renderEndScreen({ score }) {
    this.clearScreen()
    this.context.fillStyle = 'rgba(0,0,0,0.75)'
    this.context.fillRect(0, 0, this.width, this.height)
    this.context.fillStyle = 'white'
    this.context.font = '18px "Press Start 2P"'
    this.context.textAlign = 'center'
    this.context.textBaseline = 'middle'
    this.context.fillText(' Game Over', this.width/2, this.height/  -48  )
    this.context.fillText(`Score ${score}`, this.width/2, this.height )
  }
  renderPanel({ level, score, lines, nextPiece }) {
    this.context.textAlign = 'start'
    this.context.textBaseline = 'top'
    this.context.fillStyle = 'white'
    this.context.font = '14px "Press Start 2p" '

    this.context.fillText(`Score: ${score}`, this.panelX, this.panelY + 0 ) 
    this.context.fillText(`Level: ${level}`, this.panelX, this.panelY + 24 )
    this.context.fillText(`Lines: ${lines}`, this.panelX, this.panelY + 48 )
    this.context.fillText(`Next:`, this.panelX, this.panelY + 96 ) 
    for (let y = 0; y < nextPiece.blocks.length; y++) {
      for (let x = 0; x < nextPiece.blocks[y].length; x++) {
        const block = nextPiece.blocks[y][x]    
        
        if (block) {
          this.renderBlock(
            this.panelX + (x * this.blockWidth) * 0.5,
            this.panelY + (y * this.blockHeight)* 0.5 + 100,
            this.blockWidth * 0.5,
            this.blockHeight * 0.5,
            View.colors[block]

          )
        } else {
          
        }
      }
    }
  }
  renderBlock(x,y,width,height, color) {
    this.context.fillStyle = color// цвет заливки в canvas
    this.context.strokeStyle = 'black'// цвет обводки
    this.context.lineWidth = 2// ширина обводки 

    this.context.fillRect(x, y, width, height)//отрисовка блока 1,2 параметр- отступ от 
    this.context.strokeRect(x, y, width, height)//отрисовка блока 1,2 параметр- отступ от 
    
    //левого верхнего угла 3,4 - высота и ширина блока 
  }
  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height) //очищает канвас       
  }
}