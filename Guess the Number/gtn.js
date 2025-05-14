let randomNum = -1
let score = 0
let guesses = 0
let newGame = false;

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

function randomNumber()
{
    let minimum = prompt("Enter your minimum");
    let maximum = prompt("Enter your maximum");
    let theRandomNumber = getRndInteger(Number(minimum), Number(maximum));

    document.getElementById("guess").innerText = theRandomNumber;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function guess()
{
    if(newGame)
    {
        newGame = false;
        reset();
        return;
    }
    let guess = prompt("Pick a number")
    if(guess == null || isNaN(guess) || guess == "")
    {
        document.getElementById("guess").innerText = "Please enter a valid number"
        return;
    }
    guesses++
    if(guess == randomNum)
    {
        document.getElementById('guess').innerText = `You guessed it!\nIt took you ${guesses} guesses`;
        newGame = true;
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