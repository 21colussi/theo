import '../../styles/header/header.css'

function Header({ open, toggle }) {
    return (
        <header className={`header ${open ? "open" : "closed"}`}>
            <h3 className="header-logo">
                {/*<img className='logo-icon' alt='' src='temp-logo.svg'/>*/}
                <span>Théo</span>
            </h3>
            <button className="menu-toggle" onClick={toggle}>
                <span>+</span>
            </button>
        </header>
    );
}

export default Header;