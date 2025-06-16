// App.js
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import OpenRegister from './OpenRegister';
import Sale from './Sale';
import './App.css';

// ─── LoginPage Component ─────────────────────────────────────────────────────
function LoginPage({ email, setEmail, password, setPassword, error, onSubmit }) {
  return (
    <div className="login-container">
      <div className="login-avatar">SR</div>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">
          Login
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
}

function App() {
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [error, setError]           = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ─── Temporarily hard-coded login check ────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with whatever test credentials you like:
    const VALID_EMAIL    = 'user@example.com';
    const VALID_PASSWORD = 'password123';

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Routes>
      {/* Root: Login when logged-out, else jump to /register */}
      <Route
        path="/"
        element={
          !isLoggedIn 
            ? <LoginPage
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}
                onSubmit={handleSubmit}
              />
            : <Navigate to="/register" replace />
        }
      />

      {/* Protected /register */}
      <Route
        path="/register"
        element={
          isLoggedIn 
            ? <OpenRegister /> 
            : <Navigate to="/" replace />
        }
      />

      {/* Protected /sale */}
      <Route
        path="/sale"
        element={
          isLoggedIn 
            ? <Sale /> 
            : <Navigate to="/" replace />
        }
      />
    </Routes>
  );
}

export default App;


/*Email: user@example.com

Password: password123

*/
