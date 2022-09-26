//vaariáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let random = Math.round(Math.random()*10)
let attempt = 1

//Eventos
btnTry.addEventListener("click", getTryNumber)
btnReset.addEventListener("click", resetClick)

document.addEventListener('keydown', function(e) {
  if ((e.key == 'Enter') && (screen1.classList.contains('hide'))) {
    resetClick()
  }
})

//funções callback
function getTryNumber(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  
  if (Number(inputNumber.value) == random) {
    toggleScreen()

    if (attempt == 1) {
      screen2.querySelector("h2").innerText = `Acertou em ${attempt} tentativa`
    } else {
      screen2.querySelector("h2").innerText = `Acertou em ${attempt} tentativas`
    }
  }

  inputNumber.value = ""
  
  attempt++
}

function resetClick() {
  toggleScreen()
  attempt = 1
  random = Math.round(Math.random()*10)
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
