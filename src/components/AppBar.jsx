import { Link, useNavigate } from 'react-router-dom';
import '../styles/AppBar.css';

const AppBar = () => {
    const navigate = useNavigate(); // Use the hook to navigate

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the /login page when clicked
    };

    return (
        <header className="app-bar">
            <Link to="/" className="app-logo">
                FishingStore
            </Link>
            <nav className="app-bar-menu">
                <select className="product-categories">
                    <option value="rods">Fishing Rods</option>
                    <option value="baits">Baits</option>
                </select>
                <input type="text" className="search-bar" placeholder="Search products..." />
            </nav>
            <button className="login-register-btn" onClick={handleLoginClick}>
                <span>Login / Register</span>
            </button>
        </header>
    );
};

export default AppBar;
