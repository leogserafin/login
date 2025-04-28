const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

const validUsername = 'leoserafin';
const validPassword = 'abc1234';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'secure.html';
    } else {
        messageDiv.textContent = 'Invalid username or password.';
        messageDiv.className = 'message error';
    }
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('error') === 'notlogged') {
    messageDiv.textContent = 'You must login to view the secure area.';
    messageDiv.className = 'message error';
}
