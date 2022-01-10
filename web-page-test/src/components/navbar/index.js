import { Link } from "react-router-dom";
import routes from "../../navigation/routes";
import './index.css';

function NavBar() {
    return <div className="navbar">
        {routes.map(({ path, name, hide }, index) => 
            hide ? 
                null : 
                <Link key={`navbar-link-${index}`} className="navbar-item" to={path}>{name}</Link>)}
    </div>
}

export default NavBar;
