import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import OpenRegister from './OpenRegister';
import Sale from './Sale';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const text = await response.text(); // <-- avoid .json() crash
      let data;

      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error('Server returned invalid JSON: ' + text);
      }

      if (data.success || data.status === 200) {
        setIsLoggedIn(true);
      } else {
        setError(data.message || 'Login failed');
      }

      if (!data || !data.success) {
        setError(data.message || 'Login failed');
        console.log('❗ RAW NetSuite response:', data.raw); // this will show you the HTML or error
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Try again.');
    }
  };

  const LoginPage = () => (
    <div className="login-container">
      <div className="login-avatar">SR</div>
      <form className="login-form" onSubmit={handleSubmit}>
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

  return (
    <Routes>
      <Route path="/" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/register" />} />
      <Route path="/register" element={isLoggedIn ? <OpenRegister /> : <Navigate to="/" />} />
      <Route path="/sale" element={isLoggedIn ? <Sale /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
