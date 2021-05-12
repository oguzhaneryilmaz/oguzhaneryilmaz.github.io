
const holes = document.querySelectorAll('.hole');

const moles = document.querySelectorAll('.köstebek');

const scoreBoard = document.querySelector('.score');

// resimlerin bazıları

var grass = new Image();

grass.src = "resim/grass.png"

// ses efekti

var skor = new Audio();
var basla = new Audio();

basla.src = "ses/start.mp3"
skor.src = "ses/skor.mp3";


let lastHole;
let timeUp = false;
let score = 0;

function zaman(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomDelik(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Aynı delik denk geldi!!');
      return randomDelik(holes);
    }
    lastHole = hole;
    return hole;
    }

    
function startGame() {


    basla.play();
    timeUp = false;
    scoreBoard.textContent = 0;
    score = 0;
    popup();
    setTimeout(() => timeUp = true, 20000)
    
    
    }

function popup() {

    const time = zaman(749,751);
    const hole = randomDelik(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) popup();
    }, time);
  }



function vur(e) {

    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;

    
    skor.play();
    
    

  }

moles.forEach(köstebek => köstebek.addEventListener('click', vur));