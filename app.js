// define Game Rules
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    chanceLeft = 4;
    console.log(winningNum)

// define UI variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

minNum.textContent = min
maxNum.textContent = max

loadEventListeners()

function loadEventListeners(){
  guessBtn.addEventListener('click', gameGuess)
  game.addEventListener('mousedown', reloadGame)
}

function gameGuess(e){
  e.preventDefault()
  let inputNum = parseInt(guessInput.value)

  if(inputNum < min || inputNum > max || isNaN(inputNum)){
    setMessage('input yang bener woi!','red')
  }else if(inputNum === winningNum){
      gameFinish(true,`tebakan anda benar!, Angkanya adalah ${winningNum}`)
    }else{
      chanceLeft -= 1
      setMessage(`tebakan anda salah! kesempatan anda tersisa ${chanceLeft}`,'red')
      if(chanceLeft === 0){
      gameFinish(false, `you lose!! angka yang benar adalah ${winningNum}`)
      }
    }
  }

function setMessage(msg, color){
  guessInput.value = ''
  message.style.color = color
  message.textContent = msg
}

function gameFinish(won, msg){
  let color;
  won ? color = 'green' : color = 'red'
  guessInput.disabled = true

  message.style.color = color
  guessInput.style.borderColor = color

  setMessage(msg, color)
  guessBtn.className = 'play-again'
  guessBtn.value = 'play again ?'
  guessBtn.style.backgroundColor = '#id7f7f5'
}

function reloadGame(e){
  if(e.target.className.includes('play-again')){
    window.location.reload()
  }
}
