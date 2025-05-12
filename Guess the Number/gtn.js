let randomNum = -1
let score = 0
let guesses = 0

function reset()
{
    let choice = confirm('Would you like to set your own min/max?')
    score = 0
    guesses = 0
    let mini = choice ? prompt("What is the minimum number?") : 1
    let maxi = choice ? prompt("What is the maximum number?") : 100
    randomNum = getRndInteger(Number(mini), Number(maxi))

    console.log(randomNum)
    document.getElementById('guess').innerText = "";

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function guess()
{
    let guess = prompt("Pick a number")
    guesses++
    if(guess == randomNum)
    {
        document.getElementById('guess').innerText = `You guessed it!\nIt took you ${guesses} guesses`;
    }
    else if (guess > randomNum)   
    {
        document.getElementById('guess').innerText = "Lower than " + guess;
    }
    else
    {
        document.getElementById('guess').innerText = "Higher than " + guess;
    }
}