import '../../styles/menu/menu.css';
import ReactCountryFlag from "react-country-flag";

function Menu({ open }) {
    const languages = [
        { name: 'Français', code: 'FR' },
        { name: 'English',  code: 'GB' }
    ];
    return (
        <aside id="menu" className={`menu ${open ? 'open' : 'closed'}`}>
            <div className="menu-top" aria-hidden={!open}>
                <h3>
                    <span className="icon">*</span>
                    <span>21colussi</span>
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
            <div className="languages" aria-hidden={!open}>
                <h5>Langues</h5>
                <ul>
                    {languages.map(({ name, code }, i) => (
                        <li key={i}>
                        <button tabIndex={open ? 0 : -1}>
                            <ReactCountryFlag
                            countryCode={code}
                            svg
                            style={{
                                width: "1.5em",
                                height: "1.5em",
                                objectFit: "cover"
                            }}
                            />
                            <span>{name}</span>
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Menu;