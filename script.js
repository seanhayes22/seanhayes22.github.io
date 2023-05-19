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
    let colour = prompt("What is your favourite colour?");
    document.getElementById("mydiv").style.backgroundColor = colour;
    alert("Like this?");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}