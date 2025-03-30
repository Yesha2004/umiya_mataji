import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SearchPage from "./components/SearchPage";
import ContactDetails from "./components/ContactDetails";
import RecentCalls from "./components/RecentCalls";
import logo from "./assets/1__1_-removebg-preview.png";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (phone, password) => {
    // Simulated authentication logic
    if (phone === "1234567890" && password === "01-01-1990") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            !isAuthenticated ? (
              <div className="app-wrapper">
                <div className="container">
                  <div className="logo-container">
                    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                      <img src={logo} alt="Logo" className="logo-image" />
                    </div>
                  </div>
                  <LoginForm onLogin={handleLogin} />
                </div>
              </div>
            ) : (
              <Navigate to="/search" />
            )
          } 
        />
        
        {/* Other Pages */}
        <Route path="/search" element={isAuthenticated ? <SearchPage /> : <Navigate to="/" />} />
        <Route path="/contact/:id" element={isAuthenticated ? <ContactDetails /> : <Navigate to="/" />} />
        <Route path="/recent-calls" element={isAuthenticated ? <RecentCalls /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
