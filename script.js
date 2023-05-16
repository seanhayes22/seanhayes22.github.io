let number = 0;
let name = 'Sean';

function myName()
{
    number++;
    document.getElementById('mydiv').innerHTML = name + " has " + number + " cookies.";
}
















function Disappear()
{
    document.getElementById('mydiv').style.display = 'none';
}

function Reappear()
{
    document.getElementById('mydiv').style.display = 'block';
    var red = getRndInteger(0,255);
    var blue = getRndInteger(0,255);
    var green = getRndInteger(0,255);
    document.getElementById('mydiv').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}