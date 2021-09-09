



export function setUser(userObject) {
    let stringData = JSON.stringify(userObject);
    return localStorage.setItem('USER', stringData);
}

export function getUser() {
    let parsedData = JSON.parse(localStorage.getItem('USER'));
    return parsedData;
}

export function clearToDo(user) {
    user.todos = [];
    setUser(user);
}

export function addTodo(todoInput) {
    const user = getUser();
    const todoObject = {
        todo: todoInput, 
        completed: false,
    };
    user.todos.push(todoObject);
    setUser(user);
}
export function renderList(user) {
    const ol = document.createElement('ol');
    
    for (let i = 0; i < user.todos.length; i++) {
        const li = document.createElement('li');
        li.classList = 'listLi';
        const button = document.createElement('button');
        button.classList = 'completedbutton';
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.style.visibility = 'hidden';
        const removeButton = document.createElement('button');
        removeButton.classList = 'clearbutton';
        removeButton.textContent = 'Hide';
        removeButton.addEventListener('click', () => {
            li.remove();
        });
        li.textContent = user.todos[i].todo;
        button.textContent = 'Completed';
        button.addEventListener('click', () => {
            user.todos[i].completed = true;
            li.style.border = '1px solid black';
            li.style.background = 'linear-gradient(beige, purple)';
            li.style.transition = 'all 2s';
            setUser(user);
            button.disabled = true;
            input.style.visibility = 'visible';
            input.checked = true;

        });
       
        if (user.todos[i].completed === true) {
            input.style.visibility = 'visible';
            li.style.border = '1px solid black';
            li.style.background = 'linear-gradient(beige, purple)';
            li.style.transition = 'all 2s';
            button.disabled = true;
            input.checked = true;
        }
        li.append(button, removeButton, input);
        ol.append(li);  
    }
    
    return ol;
}
    
export function clearList(ol) {
    
}  

export function removeListItem(li) {
    
}