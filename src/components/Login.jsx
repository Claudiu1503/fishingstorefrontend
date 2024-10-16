import { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const credentials = btoa(`${email}:${password}`);

        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
            },
        });

        if (response.ok) {
            //const result = await response.json();
            alert('Login successful!');
            // Redirect or other actions
        } else {
            alert('Login failed!');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
