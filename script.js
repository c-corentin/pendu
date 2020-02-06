let words = [
    "serve",
    "window",
    "reflection",
    "cassette",
    "interference",
    "false",
    "century",
    "live",
    "offend",
    "dump",
    "tooth",
    "ready",
    "salon",
    "bee",
    "training",
]

let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []

for (let i = 0; i < word.length; i++) {
    answerArray[i] = " "
}

let emptybox = word.length

while(emptybox>0){

    console.log(answerArray.join("-"))

    let guessLetter = prompt("Lettre wesh")

    if (word.includes(guessLetter)){
       
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guessLetter) {
                answerArray[i] = guessLetter
                emptybox--
                console.log(answerArray.join(""))
            }
    }
    } else {
        console.log(answerArray.join(""))
        console.log("Nope, essaie encore.")
    }
}


console.log(answerArray.join(""))
console.log("Alors tu kiffes ? F5 pour rejouer.")