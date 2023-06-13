let randomNum;
let myMin = 1;
let myMax = 100;
let guessesLeft = 10;

function loadPage()
{
    randomNum = getRndInteger(myMin,myMax);
    console.log(randomNum);
    guessesLeft = 10;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById('theBody').style.backgroundColor = white;
}

function setMinMax()
{
    myMin = prompt("Set your minimum guess value", "1");
    myMax = prompt("Set your minimum guess value", "100");
    loadPage();
}

function guessNum()
{
    if(guessesLeft > 1)
    {
        guessesLeft--;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
        let myGuess = document.getElementById("myGuess").value;
        if(!isNaN(myGuess) && myGuess == randomNum)
        {
            alert("You got it!");
        }
        let red = Math.abs(myGuess - randomNum)/100 * 255;
        console.log(red);
        let green = 255-red;
        console.log(green);
        document.getElementById("theBody").style.backgroundColor = `rgb(${red}, ${green}, 0)`;
        console.log(`rgb(${red}, ${green}, 0)`);
    }
    else
    {
        alert("You ran out of guesses!")
        loadPage();
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}