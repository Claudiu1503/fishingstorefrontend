import { Link } from 'react-router-dom';
import Login from '../components/Login';
import '../styles/Login.css';

const LoginPage = () => {
    return (
        <div className="auth-page">
            <Login />
            <p>
                <Link to="/register">Create an account</Link>
                <div className="forgot-password">
                    <Link to="/reset-password">Forgot Password?</Link>
                </div>
            </p>
        </div>
    );
};

export default LoginPage;
