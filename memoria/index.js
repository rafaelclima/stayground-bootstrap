const arrImg = [
  'img/lara01.png',
  'img/lara02.png',
  'img/lara03.png',
  'img/lara04.png',
  'img/liz_lara.png',
  'img/liz01.png',
  'img/liz02.png',
  'img/liz03.png',
  'img/dc01.png',
  'img/es01.png',
  'img/es02.png',
  'img/eu01.png',
  'img/euboy.png',
  'img/euvg.png',
  'img/gr01.png',
  'img/jbs01.png',
  'img/lara05.png',
  'img/lara06.png',
  'img/larapapi01.png',
  'img/lililala01.png',
  'img/lililala02.png',
  'img/lililala03.png',
  'img/lililala04.png',
  'img/lililala05.png',
  'img/liz04.png',
  'img/rd01.png',
  'img/rdg01.png',
  'img/rg01.png',
  'img/rr01.png'
]

const main = document.getElementById('memory-game')
const cards = document.querySelectorAll('.tile')
const memoryItems = document.querySelectorAll('.memory-item')
const boardGame = document.getElementById('board-game')
const btnRestartGame = document.getElementById('restart-game')
const imgStart = document.getElementById('img-start')
const divResultado = document.getElementById('resultado-final')
const inputGroup = document.getElementsByClassName('my-input-group')

const player1 = document.getElementById('jogador1')
const player2 = document.getElementById('jogador2')

const arrCompara = []
const arrExcluir = []
const spanOpacity = []
const arrVitoria = []
const novoArr = []
let pontuacaoP1 = 0
let pontuacaoP2 = 0
let contStart = 0
let mudarJogador = 1

const embaralharArray = function(embaralhar) {
  return embaralhar.sort(() => Math.random() - 0.5);
}

function construirArr(array) {
  embaralharArray(array)  
  for (let i = 0; i < array.length; i++){
    if (novoArr.length < 8) {      
      novoArr.push(array[i])
    }
  }
}

function startGame() {
  contStart++
  if (contStart >=2 ) {
    location.reload();
  }else {
    construirArr(arrImg)
    // const clonedArray = [...novoArr];    
    const arrImgDuplicado = novoArr.concat(novoArr);
    embaralharArray(arrImgDuplicado)    
    memoryItems.forEach(function (params) {
      embaralharArray(arrImgDuplicado)
      const imgArrSpan = document.createElement('img')
      imgArrSpan.src = arrImgDuplicado.shift();
      params.appendChild(imgArrSpan)
    })
  
    cards.forEach(function(cardItems) {
      cardItems.style.pointerEvents = 'auto';
    })
  }

  imgStart.style.zIndex = '-5'
  imgStart.style.opacity = '0'
  player1.readOnly = true;
  player2.readOnly = true;
  player1.focus()

}


cards.forEach(function(element, index){
  element.addEventListener('click', function(){

    if (mudarJogador === 1) {
      player1.focus()          
    }else {
      player2.focus()
    }

    const span = element.querySelector('.memory-item')
    const comparaImg = element.querySelector('img'); 
    span.style.opacity = 1
    spanOpacity.push(span)    

    arrExcluir.push(element)
    arrCompara.push(comparaImg.src)
    element.style.backgroundColor = 'pink';
    element.style.pointerEvents = 'none';

    if (arrCompara.length === 2) {

      if (arrCompara[0] === arrCompara[1]) {

        if (mudarJogador === 1) {
          pontuacaoP1++
          mudarJogador = 1
          player1.focus()          
        }else {
          pontuacaoP2++
          mudarJogador = 2
          player2.focus()
        }

        arrVitoria.push(arrCompara[0], arrCompara[1])

        if (arrVitoria.length === 16) {
          const imgWinner = document.getElementById('img-winner')
          for (let i = 0; i < cards.length; i++) {
            cards[i].style.opacity = '0.5'            
          }
          imgWinner.style.zIndex = '10'
          imgWinner.style.opacity = '1'
          btnRestartGame.innerText = 'Restart Game'

          for(let i = 0; i < inputGroup.length; i++) {
            inputGroup[i].style.opacity = '0';
            inputGroup[i].style.zIndex = '-10'
          }

          const spanNomeP1 = document.getElementById('nome-p1')
          spanNomeP1.innerText = player1.value
          const spanPontoP1 = document.getElementById('pontuacao-p1')
          spanPontoP1.innerText = pontuacaoP1
          
          const spanNomeP2 = document.getElementById('nome-p2')
          spanNomeP2.innerText = player2.value
          const spanPontoP2 = document.getElementById('pontuacao-p2')
          spanPontoP2.innerText = pontuacaoP2 

          divResultado.style.opacity = '1'
          divResultado.style.zIndex = '10'
        }

        arrCompara.length = 0
        arrExcluir.length = 0
        spanOpacity.length = 0

      }else {

        if (mudarJogador === 1) {
          player2.focus()
          mudarJogador = 2
        }else {
          player1.focus()
          mudarJogador = 1
        }

        setTimeout(function() {
          arrExcluir[0].style.pointerEvents = 'auto';
          arrExcluir[1].style.pointerEvents = 'auto';
          arrExcluir[0].style.backgroundColor = '#555555e1';
          arrExcluir[1].style.backgroundColor = '#555555e1';
          spanOpacity[0].style.opacity = 0
          spanOpacity[1].style.opacity = 0
          arrCompara.length = 0
          arrExcluir.length = 0
          spanOpacity.length = 0
        }, 700);
      }      
    }
  })
})