const slot = [ "Star","Moon","Sun","Eclipse" ]
const reuslt = []
const coin = 0

function spin() {
    reuslt.length = 0

    for(let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * slot.length)
        const item = slot[index]
        reuslt.push(item)
    }
    
    console.log(reuslt)

    if (reuslt.every(item => item === reuslt[0])) {
        console.log("Parabens!")
    } else if (reuslt.some(item => item === reuslt[0])) {
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
    }, 1000);
}

autoPlay(1)



