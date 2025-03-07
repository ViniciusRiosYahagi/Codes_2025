const slot = ["Star", "Moon", "Sun", "Eclipse"]
let result = []

function spin() {
  result.length = 0

  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * slot.length)
    const item = slot[index]
    result.push(item)
  }

  console.log(result)

  if (result.every(item => item === result[0])) {
    console.log("Parabéns!")
  } else if (result.some(item => item === result[0])) {
    console.log("Quase!")
  } else {
    console.log("Não foi dessa vez!")
  }
}

function autoPlay(qnt) {
  const interval = setInterval(() => {
    if (qnt > 0) {
      qnt--
      spin()
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

autoPlay(3)
