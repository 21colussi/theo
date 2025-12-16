import { useState } from 'react'
import Header from './components/header/Header';
import './App.css'
import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  return (
    <>
      <Hero/>
      <Header open={menuOpen} toggle={toggleMenu}/>
      <main className={menuOpen ? "open" : "closed"}>
        <div className="content">
            <div style={{ height: "200vh", background: "red" }}/>
        </div>
        <Menu open={menuOpen}/>
      </main>
    </>
  )
}

export default App