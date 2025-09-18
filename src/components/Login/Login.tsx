import { useState } from 'react';
import { users } from '../../data/Users';
import { validateLogin } from '../LoginUtils';
import '../../scss/Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    // stops the page from refreshing when form is submitted
    e.preventDefault();

    if (!validateLogin(username, password, users)) {
      setError('Invalid username or password.');
      return;
    }

    setError('');
    alert('Welcome!');
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Login Page</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-label">
          <span>Username</span>
          <input
            className="username-input-field"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="password-label">
          <span>Password</span>
          <input
            className="password-input-field"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="login-action">
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
        <p className="login-error">{error || ' '}</p>
      </form>
    </div>
  );
};

export default Login;
