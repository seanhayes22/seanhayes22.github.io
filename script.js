let red, green, blue;

function myChange(colorVal)
{
    let input1value = document.getElementById(colorVal).value;
    document.getElementById(colorVal).style.backgroundColor = 'white';
    if(!isNaN(input1value) && input1value < 256 && input1value >= 0)
    {
        switch(colorVal)
        {
            case "red":
                red = input1value;
                break;
            case "green":
                green = input1value;
                break;
            case "blue":
                blue = input1value;
                break;
        }
        console.log(red, green, blue, "vals");
    }
    else{
        document.getElementById(colorVal).style.backgroundColor = 'red';
    }
    if(red != null && blue != null && green != null)
    {
        document.getElementById('mydiv').style.backgroundColor = `rgb(${red},${green},${blue})`; 
        document.getElementById('mydiv').innerHTML = `${red}, ${green}, ${blue}`;  
    }
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
    let colour = prompt("What is your name?");
    //document.getElementById("mydiv").style.backgroundColor = colour;
    alert("Hello " + colour);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function example()
{
    let redy = document.getElementById("red2").value;
    let greeny = document.getElementById("green2").value;
    let bluey = document.getElementById("blue2").value;
    document.getElementById('mydiv').style.backgroundColor = 'rgb('+redy+','+greeny+','+bluey+')';
}

function daisy()
{
    let dandelion = document.getElementById('rose').value;
    document.getElementById('mydiv').innerHTML = dandelion;
}



function myCalculator()
{
    let x = 8, y = 3, z = "5";
    console.log(x > y && z > y);
}