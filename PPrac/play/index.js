let $start = document.querySelector("#start");
let $game = document.querySelector("#game");
let $time = document.querySelector("#time");
let score = 0;
let isGameStarted = false,
    $gameTime = document.querySelector("#game-time"),
    $timeHeader = document.querySelector("#time-header"),
    $resultHeader = document.querySelector("#result-header"),
    $result = document.querySelector("#result");

start.addEventListener('click',startGame, renderBox);
$game.addEventListener('click', (e) =>{
  if(!isGameStarted) {
    return
  }
  if (e.target.dataset.box){
    score++;
    $game.removeChild(e.target);
    renderBox();
  }
});
function setTime(params) {
  let gameTime = +$gameTime.value;
  gameTime = gameTime.toFixed(1);
  $time.textContent = gameTime;
}
$gameTime.addEventListener("input", ()=>{
  setTime();
  hide($resultHeader);
  show($timeHeader);
})
function startGame (param) {
  score = 0;
  $gameTime.setAttribute("disabled", 'true');
  isGameStarted = true
  hide($start);

  $game.style.backgroundColor = "#fff";
  renderBox();
  let interval = setInterval(function(){
    let time = parseFloat($time.textContent);
    if(time <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      time = time - 0.1;
      $time.textContent = time.toFixed(1);
    }   
  }, 100)
}
function show($el) {
  $el.classList.remove("hide")
}
function hide($el) {
  $el.classList.add("hide")
}
function endGame() {
  isGameStarted = false;
  // $game.childNodes.forEach(element => {
  // $game.removeChild(element);
  // });
  $gameTime.removeAttribute("disabled");
  $game.innerHTML = '';
  show($start);
  $game.style.backgroundColor = "#ccc";
  setTime();
  hide($timeHeader);
  show($resultHeader);
  $result.textContent = score;
}
function renderBox() {
  let box = document.createElement("div"),
      gameSize = $game.getBoundingClientRect(),
      boxSize = getRandom(30,100),
      maxTop = gameSize.height - boxSize,
      maxLeft = gameSize.width - boxSize;
  box.style.height = box.style.width = boxSize + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = getRandomColor();
  box.style.top = getRandom(0, maxTop) + "px";
  box.style.left = getRandom(0,maxLeft) + "px";
  $game.insertAdjacentElement("afterbegin",box)
  box.setAttribute('data-box','true')
}
function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min)
}
function randColor() {
  var r = Math.floor(Math.random() * (256)),
      g = Math.floor(Math.random() * (256)),
      b = Math.floor(Math.random() * (256));
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
