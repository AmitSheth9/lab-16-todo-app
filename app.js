import { setUser } from './Todo/todo-utils.js';

const signupForm = document.getElementById('signupform');
const signupSubmit = document.getElementById('signupsubmit');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userSignup = new FormData(signupForm);
    const userObject = {
        username: userSignup.get('username'),
        password: userSignup.get('password'),
        todos:[],
    };
    setUser(userObject);
   
});

signupSubmit.addEventListener('click', () => {
    window.location = './Login/login.html';
});