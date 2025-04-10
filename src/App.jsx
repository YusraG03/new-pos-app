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
      const response = await fetch('https://7849230-sb1.app.netsuite.com/app/site/hosting/scriptlet.nl?script=5336&deploy=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        
      });
  
      const data = await response.json();
  
      if (data.success) {
        setIsLoggedIn(true);
        navigate('/register');
      } else {
        setError(data.message || 'Login failed');
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
