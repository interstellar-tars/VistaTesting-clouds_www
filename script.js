function showRegister() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Placeholder authentication logic
    if (username && password) {
        localStorage.setItem('user', username);
        showChat();
    } else {
        alert('Please enter username and password');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    // Placeholder registration logic
    if (username && password) {
        alert('Registration successful. Please login.');
        showLogin();
    } else {
        alert('Please enter username and password');
    }
}

function showChat() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('chat-page').style.display = 'block';
}

function logout() {
    localStorage.removeItem('user');
    document.getElementById('chat-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
