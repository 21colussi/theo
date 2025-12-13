import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  return (
    <>
      <Header open={menuOpen} toggle={toggleMenu}/>
      <main className={menuOpen ? "open" : "closed"}>
        <div className="content">
        </div>
        <Menu open={menuOpen}/>
      </main>
    </>
  )
}

export default App