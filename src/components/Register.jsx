import { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState(''); // pentru câmpul repeat password
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Resetăm mesajul de eroare la fiecare submit


        if (password.length < 10) {
            setErrorMessage('Password must be at least 10 characters long');
            return;
        }

        // Verificăm dacă parolele coincid
        if (password !== repeatPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        if (response.ok) {
            alert('Registration successful!');
        } else {
            const errorText = await response.text();
            setErrorMessage(errorText);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <h2>Create Account</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
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
            <input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat Password"
                required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
