let randomNum;
let myMin = 1;
let myMax = 100;
let guessesLeft = 10;

function loadPage()
{
    randomNum = getRndInteger(myMin,myMax);
    console.log(randomNum);
}

function resetGame()
{
    guessesLeft = Math.floor(myMax/10);
    if(guessesLeft < 5)
    {
        guessesLeft = 5;
    }
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById('theBody').style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("myGuess").value = "";
    loadPage();
}

function setMax()
{
    myMax = prompt("Set your maximum guess value", "100");
    document.getElementById("heading1").innerHTML = "Guess the number (1-"+myMax+")";
    resetGame();
}

function guessNum()
{
    let myGuess = document.getElementById("myGuess").value;
    if(isNaN(myGuess) || myGuess <= 0)
    {
        alert("Incorrect input");
  //      console.log(`NaN: ${isNaN(myGuess)} \nLow guess ${myGuess<=0} \nHigh guess ${myGuess > myMax}`);
//        console.log(myMax);
        return;
    }
    if(guessesLeft > 1)
    {
        guessesLeft--;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
        if(myGuess == randomNum)
        {
            alert("You got it!");
        }
        // 2.0f * x, 2.0f * (1 - x), 0
        let x = Math.abs(myGuess - randomNum)/myMax;
        let red = 2 * x * 255;
        let green = 2 * (1-x) * 255;
        document.getElementById("theBody").style.backgroundColor = `rgb(${red}, ${green}, 0)`;
        console.log(`rgb(${red}, ${green}, 0)`);
    }
    else
    {
        alert("You ran out of guesses!\nIt was " + randomNum);
        resetGame();
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}