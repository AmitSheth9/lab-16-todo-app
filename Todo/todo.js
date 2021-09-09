import { getUser, setUser, addTodo, renderList, clearList, clearToDo } from './todo-utils.js';

//we want to create a form where user can enter a todo list item. we want to add that todo item to their todo array in their object in storage

//anytime a user adds to todo list OR completes todo item the list renders again instantly

//--form on submit
//--add todo item to data
//--all todo items start incomplete
//--setUser
//--render dynamically the list with all todo items 
//--how to do this?
//for todo array.length create that many list items
//append them to ul
//add a checkbox to list by appending input type=checkbox to li


//click on list item to make checkbox checked
//--will do this later


const todoForm = document.getElementById('todoform');
const listDiv = document.getElementById('listcontainer');



todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const todoMessage = new FormData(todoForm);
    const todoInput = todoMessage.get('todoitem');
    addTodo(todoInput);
    const user = getUser();
    
    if (listDiv.childNodes[0]) {
        listDiv.removeChild(listDiv.childNodes[0]);
    }
    listDiv.append(renderList(user));

});

const toggleCompletedButton = document.createElement('button');


toggleCompletedButton.textContent = 'Toggle completed';
const toggleDiv = document.getElementById('togglecontainer');
toggleDiv.append(toggleCompletedButton);

let toggle = false;
toggleCompletedButton.addEventListener('click', () => {

    const user = getUser();
    const ol = document.querySelector('ol');
    const lis = document.querySelectorAll('li');
    if (toggle === false) {
        
        for (let j = 0; j < lis.length; j++) {
            if (user.todos[j].completed === true) {
                lis[j].remove();
            }
        }
        toggle = true;
    }
    else { 
        listDiv.removeChild(listDiv.childNodes[0]);
        listDiv.append(renderList(user));
        toggle = false;
    }
});

const clearListButton = document.createElement('button');
clearListButton.textContent = 'Clear List';
toggleDiv.append(clearListButton);

clearListButton.addEventListener('click', () => {
    const user = getUser();
    clearToDo(user);
    console.log(user);
    listDiv.removeChild(listDiv.childNodes[0]);

});
//want to do:
//change completed to true when item clicked on
///make list buttons that transform when clicked on finished todo items
//need to remember which items are crossed out or completed true because they will be forgotten since we remove the list each time we add an item

//local storage is perfect for that

//add toggle list button that removes completed tasks when clicked
//but puts them back when toggled again

//on click if completed true li.remove

//toggle button that removes only specific item



//add checkbox as well

//transform style use gradients?
















