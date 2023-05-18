function Disappear()
{
    document.getElementById('mydiv').style.display = 'none';
}

function Reappear()
{
    document.getElementById('mydiv').style.display = 'block';
    let red = getRndInteger(0,255);
    let blue = getRndInteger(0,255);
    let green = getRndInteger(0,255);
    document.getElementById('mydiv').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
}

function newFunc()
{
    let pie = "";
    let choice;

    let userInput = prompt("What is your name?","");
    while(choice = confirm("Are you"+pie+" sure?"))
    {
        pie += pie + " really";
    }
    if(!choice)
    {
        alert("I thought so.");
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}