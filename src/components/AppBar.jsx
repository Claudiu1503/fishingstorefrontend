import { Link } from 'react-router-dom';
import '../styles/AppBar.css';

const AppBar = () => {
    return (
        <header className="app-bar">
            <Link to="/" className="app-logo">
                FishingStore
            </Link>
            <nav>
                <select className="product-categories">
                    <option value="">Categories</option>
                    <option value="rods">Fishing Rods</option>
                    <option value="baits">Baits</option>
                    {/* Adaugă aici categorii */}
                </select>
                <input type="text" className="search-bar" placeholder="Search products..." />
                <Link to="/login" className="login-register-btn">
                    Login / Register
                </Link>
            </nav>
        </header>
    );
};

export default AppBar;

