import '../../styles/hero/Hero.css'

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
            <h1 id="hero-title">한국 덤프</h1>
        </section>
    )
}

export default Hero;