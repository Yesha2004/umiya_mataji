import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <header>
          <h1 className="contact">CONTACT BOOK</h1>
        </header>

        <div className="logo-container">
          <div className="logo-circle">
            <img src="/logo.png" alt="Logo" className="logo-image" />
          </div>
        </div>

        <div className="trust-info">
          <p className="trust-name">SHREE DURGIYA MATAJI SEVA TRUST</p>
          <p className="trust-location">MANGALORE</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default App;
