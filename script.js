const sinalDivisao = document.getElementById('divisao').textContent
const sinalMultiplicacao = document.getElementById('multiplicacao').textContent
const sinalSubtracao = document.getElementById('subtracao').textContent
const sinalAdicao = document.getElementById('adicao').textContent
let tela = document.querySelector('.tela')

let resultado = 0

let stringArray = []
let numberTransform = []

function numeroClicado(valor_clicado) {
  let tela = document.querySelector('.tela')
  tela.innerHTML += valor_clicado
}

function operacoes() {
  if (tela.textContent.includes(sinalAdicao, 0)) {
    stringArray = tela.textContent.split('+')

    for (let i in stringArray) {
      numberTransform.push(parseInt(stringArray[i]))
    }

    for (let i in numberTransform) {
      resultado = resultado + numberTransform[i]
    }

    tela.innerHTML = resultado

    numberTransform = []
    resultado = 0
  } else if (tela.textContent.includes(sinalSubtracao, 0)) {
    stringArray = tela.textContent.split('-')

    for (let i in stringArray) {
      numberTransform.push(parseInt(stringArray[i]))
    }

    for (let i in numberTransform) {
      resultado = Math.abs(resultado) - Math.abs(numberTransform[i])
    }

    tela.innerHTML = resultado

    numberTransform = []
    resultado = 0
  } else if (tela.textContent.includes(sinalMultiplicacao, 0)) {
    stringArray = tela.textContent.split('x')

    for (let i in stringArray) {
      numberTransform.push(parseInt(stringArray[i]))
    }

    resultado = numberTransform[0]
    for (let i = 1; i < numberTransform.length; i++) {
      resultado = resultado * numberTransform[i]
    }

    tela.innerHTML = resultado

    numberTransform = []
    resultado = 0
  } else if (tela.textContent.includes(sinalDivisao, 0)) {
    stringArray = tela.textContent.split('/')

    for (let i in stringArray) {
      numberTransform.push(parseInt(stringArray[i]))
    }

    resultado = numberTransform[0]
    for (let i = 1; i < numberTransform.length; i++) {
      resultado = resultado / numberTransform[i]
    }

    tela.innerHTML = resultado

    numberTransform = []
    resultado = 0
  }
}

function limpar() {
  numberTransform = []
  tela.innerHTML = ''
}
