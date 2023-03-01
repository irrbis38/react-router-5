import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav className=" green lighten-1">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        React Router v.5
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
