import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPasswordRequest = () => {
    const [email, setEmail] = useState('');

    const handleResetPasswordRequest = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert('Password reset link sent successfully!');
                // Optionally redirect to confirmation page (see step 3)
            } else {
                const error = await response.text();
                alert(error); // Display error message
            }
        } catch (error) {
            console.error('Error sending reset request:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetPasswordRequest}>
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login Here</Link>
            </p>
        </div>
    );
};

export default ResetPasswordRequest;