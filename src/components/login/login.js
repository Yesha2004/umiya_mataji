document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;
        
        if (phoneNumber === "" || password === "") {
            alert("Please enter both phone number and password");
            return;
        }
        
        // Simulating a login attempt (replace with actual authentication logic)
        alert("Login successful!");
    });
});

// Inject HTML structure into the document
const container = document.createElement("div");
container.innerHTML = `
    <div class="container">
        <h2>Login Details</h2>
        <form id="loginForm">
            <div class="input-group">
                <label for="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" placeholder="Enter your phone number">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password">
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
`;
document.body.appendChild(container);

// Inject CSS styles
const style = document.createElement("style");
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f5f0e1;
        text-align: center;
        padding: 20px;
    }
    .container {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .input-group {
        margin: 10px 0;
        text-align: left;
    }
    .input-group label {
        display: block;
        font-weight: bold;
    }
    .input-group input {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button {
        width: 100%;
        padding: 10px;
        background: #d4a017;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
    button:hover {
        background: #a8740a;
    }
`;
document.head.appendChild(style);