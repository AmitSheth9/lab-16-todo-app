



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
    const listDiv = document.getElementById('listcontainer');

    if (listDiv.childNodes[0]) {
        listDiv.removeChild(listDiv.childNodes[0]);
    }
    const ol = document.createElement('ol');
    
    for (let i = 0; i < user.todos.length; i++) {
        const li = document.createElement('li');
        li.classList = 'listLi';
        const completedButton = document.createElement('button');
        completedButton.classList = 'completedbutton';
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.style.visibility = 'hidden';
        
        li.textContent = user.todos[i].todo;
        completedButton.textContent = 'Completed';
        
        //on completed button, change completed to true and highlight completed task, then setUser
        completedButton.addEventListener('click', () => {
            user.todos[i].completed = true;
            li.style.width = '80%';
            li.style.border = '1px solid black';
            li.style.background = 'linear-gradient(beige, lightblue)';
            //li.style.transition = 'all 2s';
            completedButton.disabled = true;
            input.style.visibility = 'visible';
            input.checked = true;
            setUser(user);
        });
       
        //when user adds new item list renders new again, this remembers the completed tasks
        if (user.todos[i].completed === true) {
            input.style.visibility = 'visible';
            li.style.width = '80%';
            li.style.border = '1px solid black';
            li.style.background = 'linear-gradient(beige, lightblue)';
            li.style.transition = 'all 2s';
            completedButton.disabled = true;
            input.checked = true;
        }

       

        li.append(completedButton, input);
        ol.append(li);  
    }
    
    return ol;
}
    
