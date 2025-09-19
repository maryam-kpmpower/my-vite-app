import { useState } from 'react';
import { users } from '../../data/Users';
import { validateLogin } from './LoginFormUtils';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // useNavigate is an idomatic hook
    // useNavigate is fully typed in React Router v.6+
    // inferred type is: NavigateFunction
    // type NavigateFunction = (
    //     to: To | number,
    //     options?: { replace?: boolean; state?: any }
    //     ) => void;
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        // stops the page from refreshing when form is submitted
        e.preventDefault();

        if (!validateLogin(username, password, users)) {
            setError('Invalid username or password.');
            return;
        }

        setError('');
        navigate('/about');
        // alert('Welcome!');
    };

    return (
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
    );
};

export default LoginForm;
