let myList = []

function AddItemButton()
{
    myList.push(document.getElementById('toDoItem').value)
    let myIndex = myList.length -1;
    const newParagraph = document.createElement('button');
    newParagraph.innerHTML = myList[myIndex];

    newParagraph.addEventListener('click', () => {
                    Delete(index);
    });
    document.getElementById('todolist').appendChild(newParagraph);

    console.log(myList);
}

function Delete(index)
{
    myList.splice(index, 1);

    console.log(myList);
}

