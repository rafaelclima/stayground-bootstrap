let player = 1 // 1 = X - 2 = O
const winnerArr = [[1,2,3], [4,5,6], [7,8,9], [2,5,8], [3,6,9], [1,4,7], [1,5,9], [7,5,3]]
const p1 = []
const p2 = []
const arrP1 = []
const arrP2 = []
let n = {}
let divVencedor = []
let arrIndexVencedor = []
let namePlayer = ''
let tieOccured = false;
let winnerOccured = false

const divs = document.querySelectorAll('.cell')
const inputNameP2 = document.getElementById('player2')
const inputNameP1 = document.getElementById('player1')

divs.forEach(function (divSel) {

  divSel.addEventListener("click", function () {
    if (player === 1) {

      divSel.setAttribute("class", "cell o");
      divSel.style.pointerEvents = 'none';
      inputNameP1.classList.remove('timeP1');
      inputNameP2.setAttribute('class', 'timeP2')

      p1.push(parseFloat(divSel.id));
      if (p1.length > 2) {
        winnerArr.forEach(function (number, index) {
          for (let i = 0; i < p1.length; i++) {
            if (number.includes(p1[i])) {
              if (arrP1.length === 0) {
                arrP1.push(index);
              } else if (arrP1.includes(index)) {
                arrP1.push(index);
              } else {
                arrP1.push(index);
              }
            }
          }
        });        

        const repetidoP1 = arrP1.reduce((acc, curr) => {
          return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
        }, {});
        const objValuesP1 = Object.values(repetidoP1);

        arrP1.length = 0

        const testeSome = objValuesP1.some(function(valor, indexValueP1, arrayValueP1) {
          if (valor === 3) {
            winnerOccured = true
            namePlayer = document.getElementById('player1').value
            winnerMessage()

            winnerArr.forEach(function (arrayVencedor, indexArrayVencedor) {
              p1.forEach(function (winnerPlayerArray){
                if (arrayVencedor.includes(winnerPlayerArray)) {
                  arrIndexVencedor.push(indexArrayVencedor)
                }
              })
            })

            arrIndexVencedor.forEach(function(elemento) {
              if(elemento in n) {
                n[elemento]++
              }else {
                n[elemento] = 1
              }
            })

            const elementoRepetido = Object.keys(n).reduce(function(a,b){
              if(n[a] > n[b]) {
                return a
              }else {
                return b
              }
            })

            winnerArr.forEach(function(elementos, index) {
              if(elementoRepetido == index){
                divVencedor.push(elementos)
              }
            })
            const [elemDiv1, elemDiv2, elemDiv3] = divVencedor[0]
            divs.forEach(function (divsVencedoras){
              if(divsVencedoras.id == elemDiv1) {
                divsVencedoras.style.backgroundColor = "#A81821"
                divsVencedoras.style.animation = 'rotate-pulse 3s ease-in-out infinite'
              }
              if(divsVencedoras.id == elemDiv2) {
                divsVencedoras.style.backgroundColor = "#A81821"
                divsVencedoras.style.animation = 'rotate-pulse 3s ease-in-out infinite'
              }
              if(divsVencedoras.id == elemDiv3) {
                divsVencedoras.style.backgroundColor = "#A81821"
                divsVencedoras.style.animation = 'rotate-pulse 3s ease-in-out infinite'
              }
            })

          }else if ((p1.length + p2.length === 9) && valor === 3 && arrayValueP1.length === 8) {
            winnerOccured = true
            namePlayer = document.getElementById('player1').value
            winnerMessage()

          }else if (!arrayValueP1.includes(3) && (p1.length + p2.length === 9) && !tieOccured) {
            tieOccured = true
            tieMessage()
          }
        })
      }
      player = 2;

    } else if (player === 2) {

      divSel.setAttribute("class", "cell x");
      divSel.style.pointerEvents = 'none';
      inputNameP2.classList.remove('timeP2');
      inputNameP1.setAttribute('class', 'timeP1')

      p2.push(parseFloat(divSel.id));
      if (p2.length > 2) {
        winnerArr.forEach(function (number, index) {
          for (let i = 0; i < p2.length; i++) {
            if (number.includes(p2[i])) {
              if (arrP2.length === 0) {
                arrP2.push(index);
              } else if (arrP2.includes(index)) {
                arrP2.push(index);
              } else {
                arrP2.push(index);
              }
            }
          }
        });
        const repetidoP2 = arrP2.reduce((acc, curr) => {
          return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
        }, {});
        const objValuesP2 = Object.values(repetidoP2);

        arrP2.length = 0;

        const testeSome = objValuesP2.some(function(valor, index, array) {
          if (valor === 3) {
            namePlayer = document.getElementById('player2').value
            winnerMessage()

            winnerArr.forEach(function (arrayVencedor, indexArrayVencedor) {
              p2.forEach(function (winnerPlayerArray){
                if (arrayVencedor.includes(winnerPlayerArray)) {
                  arrIndexVencedor.push(indexArrayVencedor)
                }
              })
            })

            arrIndexVencedor.forEach(function(elemento) {
              if(elemento in n) {
                n[elemento]++
              }else {
                n[elemento] = 1
              }
            })

            const elementoRepetido = Object.keys(n).reduce(function(a,b){
              if(n[a] > n[b]) {
                return a
              }else {
                return b
              }
            })

            winnerArr.forEach(function(elementos, index) {
              if(elementoRepetido == index){
                divVencedor.push(elementos)
              }
            })
            const [elemDiv1, elemDiv2, elemDiv3] = divVencedor[0]
            divs.forEach(function (divsVencedoras){
              if(divsVencedoras.id == elemDiv1) {
                divsVencedoras.style.backgroundColor = "#A81821"
                divsVencedoras.style.animation = 'rotate-pulse 3s ease-in-out infinite'
              }
              if(divsVencedoras.id == elemDiv2) {
                divsVencedoras.style.backgroundColor = "#A81821"
                divsVencedoras.style.animation = 'rotate-pulse 3s ease-in-out infinite'
              }
              if(divsVencedoras.id == elemDiv3) {
                divsVencedoras.style.backgroundColor = "#A81821"
                divsVencedoras.style.animation = 'rotate-pulse 3s ease-in-out infinite'
              }
            })

          }else if ((p1.length + p2.length === 9) && valor === 3 && array.length === 8) {
            namePlayer = document.getElementById('player2').value
            winnerMessage()
          }else if (!array.includes(3) && (p1.length + p2.length === 9) && !tieOccured) {
            tieOccured = true
            tieMessage()
          }
        })
      }
      player = 1;
    }
  });
});

const restartGame = document.getElementById('new-game')
restartGame.addEventListener('click', function(){
  location.reload()
  // p1.length = 0
  // p2.length = 0
  // arrP1.length = 0
  // arrP2.length = 0
  // n = {}
  // divVencedor = []
  // arrIndexVencedor = []
  // tieOccured = false
  // winnerOccured = false
  // player = 1

  // divs.forEach( function (restartDivs) {
  //   restartDivs.setAttribute("class", "cell");
  //   restartDivs.style.backgroundColor = "#333"
  // })

  // inputNameP1.classList = ''
  // inputNameP2.classList = ''

  // inputNameP1.value = ''
  // inputNameP2.value = ''

  // divs.forEach(function (visibleDivs) {
  //   visibleDivs.style.pointerEvents = 'auto'
  // })

  // const message = document.getElementById('winner-message')
  // let meuSpan = message.querySelector("span");

  // if (!tieOccured && !winnerOccured) {
  //   message.setAttribute('class', 'winner-message')
  //   message.removeChild(meuSpan);
  // }else {
  //   message.setAttribute('class', 'winner-message')
  //   message.removeChild(meuSpan);
  //   message.style.display = "none";
  // }
})

function winnerMessage() {
  inputNameP1.classList.remove('timeP1');
  inputNameP2.classList.remove('timeP2');
  const formPlayer = document.getElementById('form-player')
  formPlayer.style.visibility = 'hidden'
  formPlayer.style.opacity = 0
  const message = document.getElementById('winner-message')
  const span = document.createElement('span')
  span.innerText = 'We Are the Champions!!!\n' + "Parabéns " + namePlayer
  message.appendChild(span)
  message.setAttribute('class', 'winner-message winner')
  message.style.display = "inline-block";
  message.style.visibility = 'visible'
  message.style.opacity = 1
}

function tieMessage() {
  const formPlayer = document.getElementById('form-player')
  formPlayer.style.visibility = 'hidden'
  formPlayer.style.opacity = 0
  const message = document.getElementById('winner-message')
  const span = document.createElement('span')  
  span.innerText = 'Vocês são incríveis\n' + 'JOGO TERMINOU EMPATADO'
  message.appendChild(span)
  message.setAttribute('class', 'winner-message tie')
  message.style.display = "inline-block";
  message.style.visibility = 'visible'
  message.style.opacity = 1
  inputNameP2.setAttribute('class', 'timeP2')
  inputNameP1.setAttribute('class', 'timeP1')
}