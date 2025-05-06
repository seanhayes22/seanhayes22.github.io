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
    document.getElementById("Paul").innerText = 'Hello, ' + myName;
}

function Recolour()
{
    let day = Math.round(document.getElementById('day').value / 31 * 255);
    let month = Math.round(document.getElementById('month').value / 12 * 255);
    let year = Math.round((2025 - document.getElementById('year').value)/ 100 * 255);

    console.log(`Day: ${day}\nMonth: ${month}\nYear: ${year}`);
    document.getElementById("Paul").style.backgroundColor = `rgb(${day}, ${month}, ${year})`;


}