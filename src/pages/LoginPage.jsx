import { Link } from 'react-router-dom';
import Login from '../components/Login';
import '../styles/Login.css';

const LoginPage = () => {
    return (
        <div className="auth-page">
            <Login />
            <p>
                <Link to="/register">Create an account</Link>
            </p>
        </div>
    );
};

export default LoginPage;
