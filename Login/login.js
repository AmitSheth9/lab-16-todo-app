import { getUser } from '../Todo/todo-utils.js';

const loginForm = document.getElementById('loginform');
const loginSubmit = document.getElementById('loginsubmit');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = getUser();
    const userLogin = new FormData(loginForm);
    const usernameLogin = userLogin.get('username');
    const passLogin = userLogin.get('pass');
        
    if (user.username === usernameLogin && user.password === passLogin) {
        window.location = './Todo/todo.html';
    }
    else {
        alert('Incorrect Username or Password');
    }
  
    
});

