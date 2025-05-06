function appear()
{
    document.getElementById('jennifer').style.display='block';
}

function disappear()
{
    document.getElementById('jennifer').style.display='none';
}

function toggle()
{
    document.getElementById("jennifer").style.display = document.getElementById("jennifer").style.display == 'none' ? 'block' : 'none'
}

function welcome()
{
    let myName = prompt('What is your name?')
    document.getElementById('jennifer').innerText = "Hello, " + myName + " have a nice day";

    // String interpolation
    //document.getElementById('jennifer').innerText = `Hello, ${myName} have a nice day`;
}
/////  TODAY ////////////////
function birthdayColour()
{
    let day = document.getElementById('day').value / 31 * 255;
    let month = document.getElementById('day').value / 12 * 255;
    let year = (2025 - document.getElementById('day').value) / 100 * 255;



    // This line does the same as the line underneath it
    document.getElementById('jennifer').style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
    // This line does the same as the line above
    document.getElementById('jennifer').style.backgroundColor = `rgb( ${red}, ${blue}, ${green})`
}