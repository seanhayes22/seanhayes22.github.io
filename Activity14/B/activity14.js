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
    //console.log(-5 % 2)

    let myName = prompt('What is your name?')
    

    if(myName == "Sean")
    // True
    {
        document.getElementById('jennifer').innerText = "Hello, " + myName + " have a nice day";
    }
    // False
    else {
        document.getElementById('jennifer').innerText = "Hello, " + myName + " have a bad day";
    }

}
/////  TODAY ////////////////
function birthdayColour()
{
    let day = document.getElementById('day').value, month, year
    
    if (day < 31)
    {
        day = document.getElementById('day').value / 31 * 255;
        document.getElementById('day').style.backgroundColor = "white"
    }
    else
    {
        document.getElementById('day').style.backgroundColor = "red"
    }
    
    
    month = document.getElementById('month').value / 12 * 255;
    year = (2025 - document.getElementById('year').value) / 100 * 255;

    let red = day;
    let green = month;
    let blue = year;

    // This line does the same as the line underneath it
    // document.getElementById('jennifer').style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
    // This line does the same as the line above
    document.getElementById('jennifer').style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`
}