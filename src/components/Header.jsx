export const Header = () => {
    return (
        <header>
            <nav className=" green lighten-1">
                <div className="nav-wrapper">
                    <a href="index.html" className="brand-logo">
                        React Router v.5
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="!#">Repo</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
