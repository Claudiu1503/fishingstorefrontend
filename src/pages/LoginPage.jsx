import { Link } from 'react-router-dom';
import Login from '../components/Login';
import '../styles/Login.css';

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="home-button-wrapper">
                <Link to="/" className="home-button">
                    Go to Homepage
                </Link>
            </div>
            <div className="auth-page">
                <Login />
                <div className="auth-links">
                    <Link to="/register">Create an account</Link>
                    <div className="forgot-password">
                        <Link to="/reset-password">Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
