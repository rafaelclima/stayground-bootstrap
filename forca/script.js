const arrPalavras = [
  {
    palavra: "banana",
    dica: "É uma fruta!"
  },
  {
    palavra: "bicicleta",
    dica: "Um meio de transporte!"
  },
  {
    palavra: "piscina",
    dica: "Um lugar!"
  },
  {
    palavra: "camarão",
    dica: "Vive na água!"
  },
  {
    palavra: "escola",
    dica: "Um lugar!"
  },
  {
    palavra: "ventilador",
    dica: "Mais usado no verão"
  },
  {
    palavra: "chapéu",
    dica: "Geralmente mais usado por homens"
  },
  {
    palavra: "roteador",
    dica: "bits e bytes passam por ele"
  },
  {
    palavra: "computador",
    dica: "veio antes do seu celular"
  },
  {
    palavra: "fotografia",
    dica: "é uma arte que precisa de luz"
  },
  {
    palavra: "sandália",
    dica: "Uma vestimenta bem útil"
  },
  {
    palavra: "tecnologia",
    dica: "está em quase tudo e todo lugar"
  },
  {
    palavra: "flamengo",
    dica: "gosta de futebol?"
  },
  {
    palavra: "troféu",
    dica: "é difícil de conquistar"
  },
  {
    palavra: "geladeira",
    dica: "geralmente é frio"
  },
    {
    palavra: "salada",
    dica: "É comestível!"
  },
    {
    palavra: "celular",
    dica: "Um objeto muito utilizado!"
  },
    {
    palavra: "monitor",
    dica: "Um objeto que tem luz"
  },
    {
    palavra: "teclado",
    dica: "Você bota os dedos nele"
  },
    {
    palavra: "relógio",
    dica: "Objeto criado em 725 d.C."
  },
    {
    palavra: "apartamento",
    dica: "abriga pessoas."
  },
    {
    palavra: "cadeado",
    dica: "Impede ou dificulta o acesso."
  },
    {
    palavra: "castelo",
    dica: "Comum na idade média."
  },
    {
    palavra: "liberdade",
    dica: "nem todos a tem."
  },
    {
    palavra: "aquecimento",
    dica: "do planeta ou do atleta?"
  },
    {
    palavra: "infortúnio",
    dica: "desgraça e má sorte."
  },
    {
    palavra: "categoria",
    dica: "Grau negativo ou positivo de excelência."
  },
    {
    palavra: "cientista",
    dica: "Seu trabalho é estudar."
  },
    {
    palavra: "terraplanagem",
    dica: "termo técnico da engenharia."
  },
    {
    palavra: "companhia",
    dica: "easy - currahee."
  },
    {
    palavra: "revista",
    dica: "um pouco obsoleto nos dias de hoje."
  }
  
];

const palavraSorteada = Math.floor(Math.random() * arrPalavras.length)
let chances = 4
let tamanhoPalavra = 0

const spanLetraOculta = document.getElementById('word-container')
const spanChances = document.getElementById('span_chances')
const dicaChance = document.getElementById('dica_chance')
const divTextoFinal = document.getElementById('texto_final')

const palavraOculta = function() {
  for (let i = 0; i < arrPalavras[palavraSorteada].palavra.length; i++) {
    const criarSpanDica = document.getElementById('span_dica')
    criarSpanDica.innerText = arrPalavras[palavraSorteada].dica
    spanChances.innerHTML = chances

    const newSpan = document.createElement('span')
    newSpan.innerText = '_'
    newSpan.id = i
    spanLetraOculta.append(newSpan)
  }
}
palavraOculta()

const letrasApertadas = document.querySelectorAll('.letra-apertada')

letrasApertadas.forEach(function(botoes){
  botoes.addEventListener('click', function(){
    //console.log(botoes.value.toUpperCase())   
    const arrLetrasJogador = []
    arrLetrasJogador.push(botoes.value)

    botoes.disabled = true
    botoes.style.backgroundColor = "#ffffff"
    botoes.style.color='#000000'

    arrPalavras[palavraSorteada].palavra.split("").forEach(function(letras,index){
      if(letras.includes(arrLetrasJogador)){
        tamanhoPalavra++

        const addLetraSpan = document.querySelectorAll('#word-container span');
        addLetraSpan.forEach(function (removerSpan){
          if(removerSpan.id == index) {
            removerSpan.innerHTML = arrLetrasJogador[0].toUpperCase()
          }
        })          
      }
    })

    if(tamanhoPalavra === arrPalavras[palavraSorteada].palavra.length) {
      letrasApertadas.forEach(function(removerBotoes) {
        removerBotoes.disabled = true
      })

      setTimeout(function(){
        telaVitoria()        
      }, 250)      

    }else if(!arrPalavras[palavraSorteada].palavra.includes(arrLetrasJogador) && tamanhoPalavra != arrPalavras[palavraSorteada].palavra.length){
      chances--
      if(chances === 3) {
        const cabecaForca = document.getElementById('cabeca_forca')
        setTimeout(function() {
          cabecaForca.style.opacity = 1;
        }, 200);
        spanChances.innerHTML = chances

      }else if(chances === 2) {
        const corpoForca = document.getElementById('corpo_forca')
        setTimeout(function() {
          corpoForca.style.opacity = 1;
        }, 200);
        spanChances.innerHTML = chances

      }else if(chances === 1) {
        const pernaE = document.getElementById('pernaE_forca')
        setTimeout(function() {
          pernaE.style.opacity = 1;
        }, 200);
        spanChances.innerHTML = chances

      }else if(chances === 0) {
        const pernaD = document.getElementById('pernaD_forca')
        setTimeout(function() {
          pernaD.style.opacity = 1;
        },200);
        spanChances.innerHTML = chances

        letrasApertadas.forEach(function(removerBotoes) {
          removerBotoes.disabled = true
        })
        
        
        setTimeout(function() {
          telaDerrota()
        }, 700)
        
      }

    }
  })
})

function reiniciarJogo() {
  location.reload()
}

function telaVitoria() {
  const retirarTitulo = document.getElementById('title-game')
  const retirarBaseForca = document.getElementById('base-forca')
  const retiraDicaChance = document.getElementById('dica_chance')
  const retiraDivBoneco = document.getElementById('boneco_forca')

  retiraDivBoneco.style.display = 'none'

  // Muda a imagem do background
  setTimeout(function() {
  retirarBaseForca.style.backgroundImage = "url(img/donkey_celebration.gif)";
  document.querySelector("#base-forca").style.width = "50vw";
  retiraDicaChance.style.display = 'none'
  }, 100)

  
}

function telaDerrota() {
  const retirarTitulo = document.getElementById('title-game')
  const retirarBaseForca = document.getElementById('base-forca')
  const retiraDicaChance = document.getElementById('dica_chance')
  const retiraDivBoneco = document.getElementById('boneco_forca')

  // const retiraCabeca = document.getElementById('cabeca_forca')
  // retiraCabeca.style.transition = "opacity .9s ease-in-out";
  // const retiraCorpo = document.getElementById('corpo_forca')
  // retiraCorpo.style.transition = "opacity .9s ease-in-out";
  // const retiraPernaE = document.getElementById('pernaE_forca')
  // retiraPernaE.style.transition = "opacity .9s ease-in-out";
  // const retiraPernaD = document.getElementById('pernaD_forca')
  // retiraPernaD.style.transition = "opacity .9s ease-in-out";

  // retirarTitulo.innerText = 'VOCÊ PERDEU!!'
  retiraDivBoneco.style.display = 'none'

  // setTimeout(function() {
  //   // defina a opacidade para 1 para que o elemento apareça gradualmente
  //   retiraCabeca.style.opacity = 0;
  //   retiraCorpo.style.opacity = 0;
  //   retiraPernaE.style.opacity = 0;
  //   retiraPernaD.style.opacity = 0;
  
  // }, 90);

  // Muda a imagem do background
  setTimeout(function() {
    retirarBaseForca.style.backgroundImage = "url(img/pikachu_sad.gif)";
    document.querySelector("#base-forca").style.width = "50vw";
  }, 100)

// document.querySelector("#base-forca").style.width = "80vw";
  retiraDicaChance.style.display = 'none'
}