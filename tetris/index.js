import Game from "./src/game.js";
import View from "./src/view.js";

const root = document.querySelector('#root')

const game = new Game()
const view = new View(root, 478, 630, 20, 10)

window.game = game;// добавление созданной переменной game в глобальную область видимости
window.view = view;

document.addEventListener('keydown', event => {
  switch(event.keyCode) {
    case 37://лево
      game.movePieceLeft()
      view.renderMainScreen(game.getState())
      break
    case 38:
      game.rotatePiece()
      view.renderMainScreen(game.getState())
      break
    case 39:
      game.movePieceRight()
      view.renderMainScreen(game.getState())
      break
    case 40:
      game.movePieceDown()
      view.renderMainScreen(game.getState())
      break
  }
})



