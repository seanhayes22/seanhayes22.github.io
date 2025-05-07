let current = ""
function appear()
{
    document.getElementById('Paul').style.display='block';
}

function disappear()
{
    document.getElementById('Paul').style.display='none';
}

function Toggle()
{
    document.getElementById('Paul').style.display = document.getElementById('Paul').style.display == 'none' ? 'block' : 'none'; 
}

function Welcome()
{
    let myName = prompt('What is your name?')

    if(myName == "Sean")
    // True
    {
        document.getElementById('Paul').innerText = "Hello, " + myName + " have a nice day";
    }
    // False
    else {
        document.getElementById('Paul').innerText = "Hello, " + myName + " have a bad day";
    }
}

function Recolour()
{
    let red = 1, blue = 1, green = 1
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    if(day <= 31 && day >= 1)
    {
        document.getElementById('day').style.backgroundColor = "white";
        red = Math.round(day / 31 * 255);
    }
    else{
        document.getElementById('day').style.backgroundColor = "red";
    }

    if(month >= 1 && month <= 12)
    {
        document.getElementById('month').style.backgroundColor = "white";
        green = Math.round(month / 12 * 255);
    }
    else
    {
        document.getElementById('month').style.backgroundColor = "red";
    }

    blue = Math.round((2025 - year)/ 100 * 255);

    document.getElementById("Paul").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}