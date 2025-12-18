import '../../styles/menu/menu.css';
import { useEffect, useState } from "react";

function Menu({ open }) {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            setIsDark(true);
        }
    }, []);
    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDark) {
            root.removeAttribute("data-theme"); // light
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };
    return (
        <aside id="menu" className={`menu ${open ? 'open' : 'closed'}`}>
            <div className="menu-top" aria-hidden={!open}>
                <h3 className="menu-logo">
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
            <div className="menu-bottom">
                <div className="socials" aria-hidden={!open}>
                    <h5>Réseaux sociaux</h5>
                    <ul>
                        <li>
                            <i className="fa-brands fa-tiktok" />
                            <span>théo</span>
                        </li>
                        <li>
                            <i className="fa-brands fa-instagram" />
                            <span>theoclss2</span>
                        </li>
                    </ul>
                </div>
                <div className="theme-color" aria-hidden={!open}>
                    <h5>Thème</h5>
                    <button
                        onClick={toggleTheme}
                        tabIndex={open ? 0 : -1}
                    >
                        <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`} />
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Menu;