document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Logged in successfully!');
    } else {
      alert('Please enter both username and password.');
    }
  });
  