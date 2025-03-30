//LoginForm.jsx

import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignedUp) {
      alert("You need to sign up first!");
      setIsSignedUp(true);
    } else {
      alert("Login successful!");
    }
  };

  return (
      <div className="login-card">
        <h2>LOGIN DETAILS</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="input-field">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z"></path>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
            </span>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-field">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-button">
            {isSignedUp ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="toggle-link">
          <p onClick={() => setIsSignedUp(!isSignedUp)}>
            {isSignedUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </p>
        </div>
      </div>
  );
}

export default LoginForm;
