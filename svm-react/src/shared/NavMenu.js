import './NavMenu.css';
import { Link } from 'react-router-dom';

function NavMenu() {
    return (
        <div className="NavMenu">
            <nav>
                <Link to="/">
                    <span className="mdi mdi-home" aria-hidden="true"></span> <span>Home</span>
                </Link>
                <Link to="/works">
                    <span className="mdi mdi-briefcase" aria-hidden="true"></span> <span>Works</span>
                </Link>
                <Link to="/skills">
                    <span className="mdi mdi-code-array" aria-hidden="true"></span> <span>Skills</span>
                </Link>
            </nav>
        </div>
    );
}

export default NavMenu;
