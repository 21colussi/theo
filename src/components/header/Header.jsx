import '../../styles/header/header.css'

function Header({ open, toggle }) {
    return (
        <header className={`header ${open ? "open" : "closed"}`}>
            <h3 className="logo">
                <span>Nom du site</span>
            </h3>
            <button className="menu-toggle" onClick={toggle}>
                <span>+</span>
            </button>
        </header>
    );
}

export default Header;