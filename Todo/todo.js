import { getUser, setUser, addTodo, renderList, clearToDo } from './todo-utils.js';
const todoForm = document.getElementById('todoform');
const listDiv = document.getElementById('listcontainer');
const usernameDisplay = document.createElement('p');
const header = document.querySelector('header');
header.append(usernameDisplay);


const user = getUser();
usernameDisplay.textContent = `Hello ${user.username}, `;


todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const todoMessage = new FormData(todoForm);
    const todoInput = todoMessage.get('todoitem');
    addTodo(todoInput);
    const user = getUser();
    console.log(user);
    
    
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

















