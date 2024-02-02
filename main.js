function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Expected username and password
    var expectedUsername = 'SunshineCat';
    var expectedPassword = 'S+E150722';

    // Check if the entered values match the expected values
    if (username === expectedUsername && password === expectedPassword) {
        // Authentication successful, redirect to index.html
        setSessionCookie();
    } else {
        // Authentication failed, display an error message
        alert('Invalid username or password. Please try again.');
    }

    // Prevent the form from submitting the traditional way
    return false;
}

// When a user successfully logs in, set a session cookie
function setSessionCookie() {
    // Set a session cookie with a specific name and value
    document.cookie = "session=authenticated; path=/";
    // Redirect the user to the protected page
    window.location.href = "index.html";
}
