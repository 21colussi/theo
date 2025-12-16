import '../../styles/hero/hero.css'

import {useRef} from "react";

function Hero() {
    const heroRef = useRef(null);
    const handleHeroClick = () => {
        const nextSection = document.querySelector(".header");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section
            className="hero"
            ref={heroRef}
            onClick={handleHeroClick}
        >
        </section>
    )
}

export default Hero;