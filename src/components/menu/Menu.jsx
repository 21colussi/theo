import '../../styles/menu/menu.css';

function Menu({ open }) {
    return (
        <aside id="menu" className={`menu ${open ? 'open' : 'closed'}`}>
            <div className="menu-top" aria-hidden={!open}>
                <h3 className="menu-logo">
                    {/*<img className='logo-icon' alt='' src='temp-logo.svg'/>*/}
                    <span>Théo</span>
                </h3>
                <ul>
                    {['Section 1', 'Section 2', 'Section 3', 'Section 4'].map((name, i) => (
                        <li key={i}>
                            <a href="#" tabIndex={open ? 0 : -1}>
                                <span className="section-name">{name}</span>
                                <span className="section-number">0{i + 1}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='menu-bottom'>
                <div className="socials" aria-hidden={!open}>
                    <h5>Réseaux sociaux</h5>
                    <ul>
                        <li>Tiktok</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="theme-color" aria-hidden={!open}>
                    <h5>Thème</h5>
                    <button id="theme-toggle" tabIndex={open ? 0 : -1}>
                        <span>O</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Menu;